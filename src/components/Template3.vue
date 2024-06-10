<template>
    <body>
        <div id="template">
          
          <div id="contact-info" class="vcard">
            <img src="../assets/cthulu.png" alt="Photo of Cthulu" id="pic" />
            <!-- Microformats! -->
            <h1 class="fn"  >{{ contactName }}</h1>
            <p>
              Cell: <span class="tel"  >{{ contactCell }}</span><br />
              Email: <a class="email" :href="'mailto:' + contactEmail"  >{{ contactEmail }}</a>
            </p>
            <div id="objective">
            <p  >{{ objective }}</p>
          </div>
          </div>
          
          <div class="clear"></div>
                <div class="item">
                    <draggable>
                        <div v-for="item in initialdata.sections" >
                            <div v-for="(value, key) in item" class="Draggable">
                                <h2 v-if="key == 'title'" >{{ value }}</h2>
                                <div class="line"></div>
                                <p v-if="key == 'content'">
                                    {{ value }}
                                </p>
                            </div>
                        </div>
                    </draggable>
                </div>
    </div>
    <div>
      <div class="control-section">
        <div class="sample-container">
          <div class="default-section"> 
            <ejs-richtexteditor ref="rte_instance" id="rte1" v-bind:value="value"></ejs-richtexteditor>
          </div>
        </div>
      </div>
    </div>
    </body>

    
</template>

<script>
import Draggable from 'vue-draggable-next';
import { VueDraggableNext } from 'vue-draggable-next';
import { RichTextEditorComponent,Toolbar,Link,Image,HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
  

export default {
  name: 'Template3',
  components: {
    Draggable,
    draggable: VueDraggableNext,
    "ejs-richtexteditor": RichTextEditorComponent
  },
  props:{
      initialdata: {
          type: Object,
          default: () => ({
              contactName: "C'thulhu",
              contactCell: "555-666-7777",
              contactEmail: "greatoldone@lovecraft.com",
              objective: "I am an outgoing and energetic (ask anybody) young professional, seeking a career that fits my professional skills, personality, and murderous tendencies. My squid-like head is a masterful problem solver and inspires fear in who gaze upon it. I can bring world domination to your organization.",
              
          sections: {
              item1: {
              "title" : "Skills",
              "content" : "office : Office and records management, database administration, event organization, customer support, travel coordination \n computer : Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows"
          },
          item2: {
                "title": "experience1",
                "content" : "location : Bartender/Server - Milwaukee, WI - 2009 \n Worked on grass-roots promotional campaigns \n Reduced theft and property damage percentages \n Janitorial work, Laundry"
          },
          item3: {
                "title": "experience2",
                "content" : "location : Bartender/Server - Milwaukee, WI - 2009 \n Worked on grass-roots promotional campaigns \n Reduced theft and property damage percentages \n Janitorial work, Laundry"
          },
          item4: {
            "title": "hobbies",
            "content": "World Domination, Deep Sea Diving, Murder Most Foul"
             },
        item5:{
                "title" : "references",
                "content": "Available on request"},
        item6: {
              "title":"eduction", 
              "content" : "Withering Madness University - Planet Vhoorl \n major: Public Relations \n minor: Scale Tending"
          },}
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
  data: function () {
        return {
          value: "<p>The Rich Text Editor component is a WYSIWYG editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>"
        }
      },
    provide: {
        richtexteditor: [Toolbar, Link, Image, HtmlEditor]
    },
  created() {
    const storedData = localStorage.getItem('resumeData');
    if (storedData) {
      Object.assign(this.$data, JSON.parse(storedData));
    }
  },
  methods: {
    updateData(field, event) {
      const keys = field.split('.');
      log
      let target = this;
      while (keys.length > 1) {
        target = target[keys.shift()];
      }
      target[keys[0]] = event.target.innerText;
    },
    updateExperience1(index, event) {
      this.experience1.details[index] = event.target.innerText;
      this.saveData();
    },
    updateExperience2(index, event) {
      this.experience2.details[index] = event.target.innerText;
      this.saveData();
    },
    saveData() {
      localStorage.setItem('resumeData', JSON.stringify(this.$data));
    },
    saveAllChanges() {
    const templateID = 3;
    const templateData = { ...this.resumeData };
    console.log(this.resumeData);
    this.$emit('saveChanges', [templateID, templateData ]);
  },
   sectionAdding() {

   },
   sectionDeletting(){

   }
  }
};
</script>

<style>
    * {
      margin: 0;
      padding: 0;
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font: 16px Helvetica, Sans-Serif;
      line-height: 24px;
      background: url('../assets/noise.jpg');
      
    }

    .Draggable{
        display: flex;
        justify-content: flex-start;
    }
    .line{
        border:2px solid ;
    }


    template{
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
