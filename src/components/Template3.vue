<template>
  <body>
    <div id="template">
      <div id="contact-info" class="vcard">
        <img src="../assets/cthulu.png" alt="Photo of Cthulu" id="pic" />
        <!-- Microformats! -->
        <h1 class="fn">{{ resumeData.contactName }}</h1>
        <p>
          Cell: <span class="tel">{{ resumeData.contactCell }}</span><br />
          Email: <a class="email" :href="'mailto:' + resumeData.contactEmail">{{ resumeData.contactEmail }}</a>
        </p>
        <div id="objective">
          <p>{{ resumeData.objective }}</p>
        </div>
      </div>

      <div class="clear"></div>
      <div class="item">
        <draggable>
          <div v-for="section in resumeData.sections" :key="section.id">
            <div v-for="(value, key) in section" class="Draggable">
              <h2 v-if="key === 'title'">{{ value }}</h2>
              <div class="line"></div>
              <p v-if="key === 'content'">{{ value }}</p>
            </div>
          </div>
        </draggable>
      </div>
    </div>
    <TextEditor @formData="GettingFormdData" />
  </body>
</template>

<script>
import Draggable from 'vue-draggable-next';
import { VueDraggableNext } from 'vue-draggable-next';
import TextEditor from './TextEditor.vue'

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
        contactName: "C'thulhu",
        contactCell: "555-666-7777",
        contactEmail: "greatoldone@lovecraft.com",
        objective: "I am an outgoing and energetic (ask anybody) young professional, seeking a career that fits my professional skills, personality, and murderous tendencies. My squid-like head is a masterful problem solver and inspires fear in who gaze upon it. I can bring world domination to your organization.",
        sections: [
          {
            id: 0,
            title: "Skills",
            content: "office : Office and records management, database administration, event organization, customer support, travel coordination \n computer : Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows"
          },
          {
            id: 1,
            title: "experience1",
            content: "location : Bartender/Server - Milwaukee, WI - 2009 \n Worked on grass-roots promotional campaigns \n Reduced theft and property damage percentages \n Janitorial work, Laundry"
          },
          {
            id: 2,
            title: "experience2",
            content: "location : Bartender/Server - Milwaukee, WI - 2009 \n Worked on grass-roots promotional campaigns \n Reduced theft and property damage percentages \n Janitorial work, Laundry"
          },
          {
            id: 3,
            title: "hobbies",
            content: "World Domination, Deep Sea Diving, Murder Most Foul"
          },
          {
            id: 4,
            title: "references",
            content: "Available on request"
          },
          {
            id: 5,
            title: "education",
            content: "Withering Madness University - Planet Vhoorl \n major: Public Relations \n minor: Scale Tending"
          }
        ]
      })
    }
  },
  data() {
    return {
      resumeData: { ...this.initialdata }
    };
  },
  methods: {
    GettingFormdData(Data) {
      this.resumeData = { ...this.resumeData, ...Data };
    }
  }
};
</script>

<style>
/* CSS code remains the same */
* {
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  font: 16px Helvetica, Sans-Serif;
  line-height: 24px;
  background: url('../assets/noise.jpg');
}
.Draggable {
  display: flex;
  justify-content: flex-start;
}
.line {
  border: 2px solid;
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
  flex-direction: column;
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
  border-bottom: 1px solid #999;
}
h2 {
  font-size: 20px;
  margin: 0 0 6px 0;
  position: relative;
}
h2 span {
  position: absolute;
  bottom: 0;
  right: 0;
  font-style: italic;
  font-family: Georgia, Serif;
  font-size: 16px;
  color: #999;
  font-weight: normal;
}
p {
  margin: 0 0 16px 0;
}
a {
  color: #999;
  text-decoration: none;
  border-bottom: 1px dotted #999;
}
a:hover {
  border-bottom-style: solid;
  color: black;
}
ul {
  margin: 0 0 32px 17px;
}
#objective {
  width: 500px;
  float: left;
}
#objective p {
  font-family: Georgia, Serif;
  font-style: italic;
  color: #666;
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
}
.square-button {
  width: 40px; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  border-radius: 20px; /* Make the button square */
  padding: 0; /* Remove padding */
  display: flex;
  justify-content: center;
  align-items: center;
}
.square-button:hover {
  background-color: #d3d3d3; /* Light gray hover effect */
}
</style>
