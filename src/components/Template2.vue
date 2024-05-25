<template>
   <div class="template-content">
    <div ref="componentContainer" class="container">
      <div class="header row mb-4 border-bottom pb-3">
        <div class="profile-section col-md-3 text-center">
          <img :src="profilePictureUrl" alt="Profile Picture" class="profile-pic img-fluid rounded-circle mb-2" />
          <input type="file" @change="onFileChange" accept="image/*" class="file-input form-control-file" />
        </div>
        <div class="personal-info col-md-9">
          <h1 class="h3 mb-3">
            <input v-model="templateData.personalInfo.name" placeholder="Enter your name" class="input-large form-control form-control-lg" />
          </h1>
          <p class="mb-2">
            <label class="form-label">Email:</label>
            <input v-model="templateData.personalInfo.email" placeholder="Enter your email" class="input-small form-control" />
          </p>
          <p class="mb-2">
            <label class="form-label">Phone:</label>
            <input v-model="templateData.personalInfo.phone" placeholder="Enter your phone number" class="input-small form-control" />
          </p>
          <p class="mb-2">
            <label class="form-label">Address:</label>
            <input v-model="templateData.personalInfo.address" placeholder="Enter your address" class="input-small form-control" />
          </p>
        </div>
      </div>
  
      <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log" :handle="'.drag-handle'">
        <div class="section education mb-4">
          <h2 class="drag-handle bg-primary text-white p-2 rounded-top">Education</h2>
          <div class="p-3 bg-white border rounded-bottom">
            <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
              <h3 class="h5 mb-2">
                <input v-model="templateData.education.degree" placeholder="Enter your degree" class="input-medium form-control" />
              </h3>
              <p class="mb-1">
                <input v-model="templateData.education.university" placeholder="Enter your university" class="input-small form-control" />
              </p>
              <p class="mb-1">
                <label class="form-label">Graduation Year:</label>
                <input v-model="templateData.education.graduationYear" placeholder="Enter graduation year" class="input-small form-control" />
              </p>
            </draggable>
          </div>
        </div>
  
        <div class="section experience mb-4">
          <h2 class="drag-handle bg-primary text-white p-2 rounded-top">Work Experience</h2>
          <div class="p-3 bg-white border rounded-bottom">
            <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
              <h3 class="h5 mb-2">
                <input v-model="templateData.experience.position" placeholder="Enter your position" class="input-medium form-control" />
              </h3>
              <p class="mb-1">
                <input v-model="templateData.experience.company" placeholder="Enter company name" class="input-small form-control" />
              </p>
              <p class="mb-1">
                <input v-model="templateData.experience.dates" placeholder="Enter start and end date" class="input-small form-control" />
              </p>
              <ul class="list-unstyled">
                <li v-for="(responsibility, index) in templateData.experience.responsibilities" :key="index" class="mb-1">
                  <input v-model="templateData.experience.responsibilities[index]" placeholder="Enter a responsibility" class="input-small form-control" />
                </li>
              </ul>
            </draggable>
          </div>
        </div>
  
        <div class="section skills mb-4">
          <h2 class="drag-handle bg-primary text-white p-2 rounded-top">Skills</h2>
          <div class="p-3 bg-white border rounded-bottom">
            <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
              <span v-for="(skill, index) in templateData.skills" :key="index" class="badge bg-secondary p-2 me-2 mb-2">
                <input v-model="templateData.skills[index]" placeholder="Enter a skill" class="input-small form-control bg-transparent border-0 text-white" />
              </span>
            </draggable>
          </div>
        </div>
      </draggable>
  

    </div>
    <div class="section text-center">
        <button @click="saveAllChanges" class="save-button btn btn-success btn-lg">Save Changes</button>
      </div>
   </div>


  </template>
  
  <script>

  // this is the template example

  
  import Draggable from 'vue-draggable-next';
  import { VueDraggableNext } from 'vue-draggable-next';
  
  export default {
    name: 'Template2',
    components: {
      Draggable,
      draggable: VueDraggableNext,
    },
    props: {
      initial: {
        type: Object,
        default: () => ({}),
        required: false,
      },
    },
    data() {
      return {
        templateData: {
          personalInfo: {
            name: this.initial.personalInfo?.name || 'John Doe',
            email: this.initial.personalInfo?.email || 'john@example.com',
            phone: this.initial.personalInfo?.phone || '+1 123 456 7890',
            address: this.initial.personalInfo?.address || '123 Main Street, City, Country',
          },
          education: {
            degree: this.initial.education?.degree || 'Bachelor of Science in Computer Science',
            university: this.initial.education?.university || 'University Name, City, Country',
            graduationYear: this.initial.education?.graduationYear || '20XX',
          },
          experience: {
            position: this.initial.experience?.position || 'Software Engineer',
            company: this.initial.experience?.company || 'Company Name, City, Country',
            dates: this.initial.experience?.dates || 'Start Date - End Date',
            responsibilities: this.initial.experience?.responsibilities || ['Responsibility 1', 'Responsibility 2', 'Responsibility 3'],
          },
          skills: this.initial.skills || ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'Node.js'],
          snapshot: '',
        },
        profilePictureUrl: this.initial.profilePic || '', // Default profile picture URL
      };
    },
    methods: {
      async saveAllChanges() {
        const userId = 'currentUser'; // This should be dynamically set
        const templateID = 2;
        const templateData = [userId, templateID, {
            personalInfo: this.templateData.personalInfo,
            education: this.templateData.education,
            experience: this.templateData.experience,
            skills: this.templateData.skills,
            profilePic : this.profilePictureUrl,
            snapshot: '' // Pass snapshot data to saveChange function
        }];
        this.$emit('saveChanges', templateData);

      },
      onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.profilePictureUrl = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    font-family: 'Roboto', sans-serif;
    padding: 30px;
    background: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #ddd;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  
  .profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  }
  
  .profile-pic {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
  }
  
  .file-input {
    margin-top: 10px;
  }
  
  .personal-info {
    flex-grow: 1;
  }
  
  .personal-info h1 {
    margin-bottom: 10px;
  }
  
  .personal-info p {
    margin: 5px 0;
  }
  
  .personal-info input {
    width: calc(100% - 100px);
    padding: 8px;
    margin-left: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .section {
    margin-bottom: 20px;
  }
  
  .section h2 {
    background: #007bff;
    color: #fff;
    padding: 10px;
    margin: 0 -30px;
    border-radius: 5px 5px 0 0;
  }
  
  .input-large {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .input-medium {
    width: calc(100% - 20px);
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .input-small {
    width: calc(100% - 20px);
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .skill {
    display: inline-block;
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  
  .save-button {
    background-color: #28a745;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .save-button:hover {
    background-color: #218838;
  }
  .container {
  margin: 0 auto;
  max-width: 800px;
}
  </style>
  