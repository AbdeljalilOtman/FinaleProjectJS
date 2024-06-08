<template>
   <div class="template-content">
    <div ref="componentContainer" class="container">
      <div class="header row mb-4 border-bottom pb-3">
          <img src="@/assets/UsefullImages/I1.jpg" alt="Profile Picture" class="profile-pic image-fluid" />
          <!-- <input type="file" @change="onFileChange" accept="image/*" class="file-input form-control-file" /> -->
          <h1 class="h3 mb-3">
            <input v-model="templateData.personalInfo.name" placeholder="Enter your name" class="input-small " />
          </h1>
          

          <div class="">
            <h4>Contact</h4>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
		        <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" />
	          </svg>
            <input v-model="templateData.personalInfo.email" placeholder="Enter your email" class="input-small " />

            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"/><path fill="currentColor" d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"/></svg>
              <input v-model="templateData.personalInfo.address" placeholder="Enter your address" class="input-small " />
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"/></svg>
              <input v-model="templateData.personalInfo.phone" placeholder="Enter your phone number" class="input-small " />
              
            </div>
          
          </div>
          <div>
            <h4>Skills</h4>

            <div>
              <strong>MS Word</strong>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 32%"></div>
              </div>
            </div>

          </div>
          <div>
            <h4>Strength</h4>

          </div>
          <div>
            <h4>Interests</h4>

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
        profilePictureUrl: 'src/assets/UsefullImages/I1.jpg', // Default profile picture URL
      };
    },
    methods: {
      async saveAllChanges() {
        const templateID = 2;
        const templateData = [templateID, {
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

    display: flex;
    

  }
  
  .header {
    display: flex;
    align-items: flex-start;
    border-bottom: 2px solid #ddd;
    padding-bottom: 20px;
    margin-bottom: 20px;

    background: #243847;
    width: 500px;
    font-family: 'Courier New', Courier, monospace;
    font-size: medium;
    font-weight: 500;
    color: white;
    flex-direction: column;

  }
  
  .profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  }
  
  .profile-pic {
    /* border-radius: 50%;
    width: 120px;
    height: 120px;
    margin-bottom: 10px; */

      width: 100px; /* Adjust the size as needed */
      height: 100px;
      border: 3px solid #fff; /* White border */
      border-radius: 50%; /* Rounded shape */
      overflow: hidden; /* Hide overflow if the image is larger than the container */
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
    padding: 3px;
  
    border-color: transparent;
    background-color: transparent;
    color: white;
  }
  .input-small:hover{
    border: none;
    border-color: transparent;
    background-color: transparent;
    color: white;
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
h4{
  color: #243847;
  background-color: white;
  width: max-content;
  margin-left: -12px ;

  border-right: 2px #cb9b57  solid;
  border-top: 2px #cb9b57  solid;
  border-bottom: 2px #cb9b57   solid;

  border-top-right-radius: 5px ;
  border-bottom-right-radius:20px;

  padding-right: 10px;


}
  </style>
  