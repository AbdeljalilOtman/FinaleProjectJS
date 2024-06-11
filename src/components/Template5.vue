<template>
    <div>
      <body>
        <div id="template">
          <div id="contact-info" class="vcard">
            <!-- <img src="../assets/cthulu.png" alt="Photo of Cthulu" id="pic" /> -->
            <div id="Fdiv">
              <h1 class="fn">{{ resumeData.contactName }}</h1>
            <p>
              <font-awesome-icon icon="phone" />
               <span class="tel">{{ resumeData.contactCell }}</span><br />
               <font-awesome-icon icon="envelope" /><a class="email" :href="'mailto:' + resumeData.contactEmail">{{ resumeData.contactEmail }}</a>
            </p>
            </div>
            
            <div id="objective">
              <p>{{ resumeData.objective }}</p>
            </div>
          </div>
  
          <div class="clear"></div>
          <div class="item">
            <draggable>
              <div v-for="item in resumeData.sections" :key="item.id">
                <div v-for="(value, key) in item" class="Draggable">
                  <h2 v-if="key === 'title'">{{ value }}</h2>
                  <div class="line"></div>
                  <p v-if="key === 'content'">{{ value }}</p>
                </div>
              </div>
            </draggable>
          </div>
        </div>
        <TextEditor class="Editor" @formData="updateFormData" />
      </body>
      <div class="button-container">
        <button @click="saveAllChanges" class="save-button">Save</button>
      </div>
    </div>
  </template>
  
  <script>
  import Draggable from 'vue-draggable-next';
  import { VueDraggableNext } from 'vue-draggable-next';
  import TextEditor from './TextEditor.vue';
  
  export default {
    name: 'Template3',
    components: {
      Draggable,
      draggable: VueDraggableNext,
      TextEditor
    },
    props: {
      initialdata: {
        type: Object,
        default: () => ({
          contactName: "John Doe",
          contactCell: "555-123-4567",
          contactEmail: "john.doe@example.com",
          objective: "Highly motivated professional seeking to leverage skills and experience to contribute to organizational success.",
          sections: [
            {
              id: 0,
              title: "Skills",
              content: "Project Management, Software Development, Data Analysis, Team Leadership"
            },
            {
              id: 1,
              title: "Experience",
              content: "Software Engineer at Tech Corp - Developed scalable web applications and led a team of junior developers."
            },
            {
              id: 2,
              title: "Education",
              content: "Bachelor of Science in Computer Science - State University"
            },
            {
              id: 3,
              title: "Hobbies",
              content: "Hiking, Reading, Coding"
            },
            {
              id: 4,
              title: "References",
              content: "Available upon request"
            }
          ]
        }),
        required: false
      }
    },
  
    data() {
      return {
        resumeData: {
          ...this.initialdata
        }
      };
    },
  
    methods: {
      updateFormData(data) {
        this.resumeData = { ...data };
      },
      saveAllChanges() {
        const templateID = 1;
        const templateData = { ...this.resumeData };
        this.$emit('saveChanges', [templateID, templateData]);
      }
    }
  };
  </script>
  
  <style>

.Editor{
  z-index: 1;
}

#Fdiv {
  background-color: #f9f9f9; /* Light white background */
  padding: 10%;
  z-index: 1;
  width: 300px;
  margin-left: 5%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added shadow */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  line-height: 24px;
  background: #f9f9f9; /* Light white background */
  color: #000000; /* Black text color */
}

.Draggable {
  display: flex;
  justify-content: flex-start;
}

.line {
  border: 2px solid #555;
}

template {
  margin-left: 1000px;
}

.clear {
  clear: both;
}

#template {
  width: 800px;
  margin: 40px auto 60px;
  display: flex;
  background: #f9f9f9; /* Light white background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added shadow */
  color: #000000; /* Black text color */
}

#pic {
  float: right;
  margin: -30px 0 0 0;
}

h1 {
  margin: 0 0 16px 0;
  padding: 0 0 16px 0;
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -2px;
  border-bottom: 1px solid #555;
  color: #000; /* Black text color */
}

h2 {
  font-size: 20px;
  margin: 0 0 6px 0;
  position: relative;
  color: #000; /* Black text color */
}

h2 span {
  position: absolute;
  bottom: 0;
  right: 0;
  font-style: italic;
  font-family: 'Georgia', serif;
  font-size: 16px;
  color: #666; /* Slightly darker text color */
  font-weight: normal;
}

p {
  margin: 0 0 16px 0;
  color: #000; /* Black text color */
}

a {
  color: #000; /* Black text color */
  text-decoration: none;
  border-bottom: 1px dotted #000; /* Black text color */
}

a:hover {
  border-bottom-style: solid;
  color: #555;
}

ul {
  margin: 0 0 32px 17px;
}

#objective {
  width: 500px;
  float: left;
}

#objective p {
  font-family: 'Georgia', serif;
  font-style: italic;
  color: #666; /* Slightly darker text color */
}

dt {
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  text-align: right;
  padding: 0 26px 0 0;
  width: 150px;
  float: left;
  height: 100px;
  border-right: 1px solid #999;
}

dd {
  width: 600px;
  float: right;
}

dd.clear {
  float: none;
  margin: 0;
  height: 15px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  position: fixed;
  bottom: 10px;
  width: 100%;
}

.save-button {
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  background-color: rgba(40, 40, 40, 0.8);
  cursor: pointer;
}

.save-button:hover {
  background-color: #555;
}

  </style>
  