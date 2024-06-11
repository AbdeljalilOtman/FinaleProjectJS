<template>
    <div class="container">
      <div class="main-body">
  
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="main-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Profile</li>
          </ol>
        </nav>
        

        <!-- /Breadcrumb -->
  
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card preview">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img :src="profilePicture" alt="Admin" class="rounded-circle profile-img" width="150">
                  <input type="file" ref="fileInput" @change="onFileChange" style="display: none;">
                  <div class="mt-3">
                    <h4>{{ userInfo.FullName }}</h4>
                    <p class="text-secondary font-size-sm">{{ userInfo.Address }}</p>
                    <button class="btn btn-primary mt-2" @click="triggerFileInput">Change Picture</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0"> Full Name </h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" v-model="userInfo.FullName" :disabled="UserInfoDisabled" class="form-control">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0"> Birth Date </h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="date" v-model="userInfo.BirthDate" :disabled="UserInfoDisabled" class="form-control">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0"> Email </h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" v-model="userInfo.Email" :disabled="UserInfoDisabled" class="form-control">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0"> Phone </h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="number" v-model="userInfo.Phone" :disabled="UserInfoDisabled" class="form-control">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0"> Adress </h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" v-model="userInfo.Adress" :disabled="UserInfoDisabled" class="form-control">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12" v-if="UserInfoDisabled">
                    <button class="btn btn-primary mt-2" @click="toggleEditUserInfo">Edit Profile</button>
                  </div>
                  <div class="col-sm-12" v-else>
                    <button class="btn btn-primary mt-2" @click="toggleEditUserInfo">Save</button>
                  </div>

                </div>
              </div>
            </div>
            <div class="card mt-3">
              <div class="card-body">
                <div v-for="(link, platform) in usefulLinks" :key="platform" class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">{{ platform }}</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" v-model="usefulLinks[platform]" :disabled="LinksDisabled" class="form-control">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12" v-if="LinksDisabled">
                    <button class="btn btn-primary mt-2" @click="toggleEditLinks">Edit Links</button>
                  </div>
                  <div class="col-sm-12" v-else>
                    <button class="btn btn-primary mt-2" @click="toggleEditLinks">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import getUser from '../composables/getUser';
  import {getUserData} from '../composables/useFirestore';

  export default {
    data() {
      return {
        LinksDisabled: true,
        UserInfoDisabled: true,
        profilePicture: '',
        userInfo: {
          FullName: '',
          Email: '',
          Phone: '',
          BirthDate: '',
          Address: ''
        },
        usefulLinks: {
          LinkedIn: '',
          GitHub: '', // corrected 'Github' to 'GitHub'
        }
      }
    },
    async mounted() {
        const { user } = getUser();
        this.userId = user.value ? user.value.uid : null;
        if (!this.userId) {
            throw new Error('User is not authenticated');
        }

        let data= await getUserData(this.userId);
        console.log(data);
        this.userInfo=data.userInfo;
        this.usefulLinks=data.usefulLinks;
        this.profilePicture=data.profilePicture;


    },

    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
       onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = async  e => {
            this.profilePicture = e.target.result;
            await this.$firestore.collection('users').doc(this.userId).update({profilePicture : this.profilePicture});

          };
          reader.readAsDataURL(file);
        }
      },
      async toggleEditUserInfo() {
        if(!this.UserInfoDisabled){
          await this.saveUserInfo();
        }
        this.UserInfoDisabled = !this.UserInfoDisabled;

      },
      async toggleEditLinks() {
        if(!this.LinksDisabled){
          await this.saveLinks();
        }
        this.LinksDisabled = !this.LinksDisabled;

      },
      async saveUserInfo() {

        await this.$firestore.collection('users').doc(this.userId).update({userInfo : this.userInfo});
      },
      async saveLinks() {

        await this.$firestore.collection('users').doc(this.userId).update({usefulLinks : this.usefulLinks});
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    margin-left: calc(2rem + 50px);
  }
  
  .profile-img:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  
  button {
    background-color: #007bff;
    border: none;
    color: white;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .form-control {
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
  }
  
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
  }
  
  .container {
    padding: 20px;
    max-width: 100%;
  }
  
  .card {
    margin-bottom: 20px;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-body {
    padding: 20px;
  }
  </style>
  