<template>
  <div class="editor-sidebar" :class="{ 'expanded': isExpanded }">
    <button @click="toggleForm" class="toggle-button" :class="{ 'inside': isExpanded }">
      {{ isExpanded ? 'Reduce' : '' }}
    </button>
    <div v-if="isExpanded" class="form-container">
      <label>Contact Name:</label>
      <input type="text" v-model="contactName" class="input-field" />

      <label>Contact Cell:</label>
      <input type="text" v-model="contactCell" class="input-field" />

      <label>Contact Email:</label>
      <input type="text" v-model="contactEmail" class="input-field" />

      <label>Objective:</label>
      <textarea v-model="objective" class="input-field"></textarea>

      <div v-for="(section, index) in sections" :key="section.id" class="section">
        <label>Section Title:</label>
        <input type="text" v-model="section.title" class="input-field" />
        <label>Section Content:</label>
        <textarea v-model="section.content" class="input-field"></textarea>
        <button @click="removeSection(index)" class="delete-button">Delete Section</button>
      </div>

      <button @click="addSection('New Section')" class="add-button">Add Section</button>
      <button @click="applyChanges" class="apply-button">Apply Changes</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactName: "",
      contactCell: "",
      contactEmail: "",
      objective: "",
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
      ],
      isExpanded: false
    };
  },

  methods: {
    applyChanges() {
      const formData = {
        contactName: this.contactName,
        contactCell: this.contactCell,
        contactEmail: this.contactEmail,
        objective: this.objective,
        sections: this.sections
      };
      this.$emit('formData', formData);
    },
    addSection(title) {
      this.sections.push({
        id: this.sections.length, // Generate unique ID
        title: title,
        content: ''
      });
    },
    removeSection(index) {
      this.sections.splice(index, 1);
    },
    toggleForm() {
      this.isExpanded = !this.isExpanded;
    }
  }
}
</script>

<style scoped>
.editor-sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 50px;
  height: 100%;
  background-color: #e6f1ff;
  border-left: 3px solid #005cbf;
  transition: width 0.3s ease-in-out;
  overflow: hidden;
}

.editor-sidebar.expanded {
  width: 300px;
}

.form-container {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  overflow-y: auto;
  height: 100%;
}

.editor-sidebar.expanded .form-container {
  opacity: 1;
}

label {
  color: #005cbf;
  font-weight: bold;
  margin-bottom: 8px;
}

.input-field {
  border: 1px solid #005cbf;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

textarea {
  border: 1px solid #005cbf;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.button {
  background-color: #005cbf;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;
}

.add-button {
  background-color: #00aaff;
}

.apply-button {
  background-color: #ff6600;
}

.delete-button {
  background-color: #ff3333;
}

.button:hover {
  background-color: #004080;
}

.toggle-button {
  background-color: #005cbf;
  color: #fff;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}

.toggle-button.inside {
  right: 10px;
  top: 10px;
  width: auto;
  height: auto;
  padding: 10px;
  border-radius: 4px;
  background-color: rgba(0, 92, 191, 0.8); /* Slightly transparent */
}
</style>
