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
  position: fixed; /* Fixed position to stick to the side */
  right: 0; /* Align to the right side of the screen */
  top: 0; /* Start from the top */
  width: 50px; /* Collapsed width */
  background-color: #e6f1ff; /* Light blue background */
  height: 100%; /* Full height */
  border-left: 3px solid #005cbf; /* Dark blue border */
  transition: width 0.3s ease-in-out; /* Smooth transition for width */
  overflow: hidden;
}

.editor-sidebar.expanded {
  width: 300px; /* Set the desired expanded width */
}

.form-container {
  display: flex;
  flex-direction: column;
  opacity: 0; /* Start with hidden content */
  transition: opacity 0.3s ease-in-out; /* Smooth transition for opacity */
  overflow-y: auto; /* Add scroll for long content */
  height: calc(100% - 60px); /* Adjust height to leave space for the button */
}

.editor-sidebar.expanded .form-container {
  opacity: 1; /* Show content when expanded */
}

label {
  color: #005cbf; /* Dark blue text */
  font-weight: bold;
  margin-bottom: 8px;
}

.input-field {
  border: 1px solid #005cbf; /* Dark blue border */
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

textarea {
  border: 1px solid #005cbf; /* Dark blue border */
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

.button {
  background-color: #005cbf; /* Dark blue background */
  color: #fff; /* White text */
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;
}

.add-button {
  background-color: #00aaff; /* Light blue background */
}

.apply-button {
  background-color: #ff6600; /* Orange background */
}

.delete-button {
  background-color: #ff3333; /* Red background */
}

.button:hover {
  background-color: #004080; /* Darker shade for hover effect */
}

.toggle-button {
  background-color: #005cbf; /* Dark blue background */
  color: #fff; /* White text */
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute; /* Position the toggle button */
  right: 10px; /* Align to the right side */
  top: 10px; /* Align to the top */
  transition: right 0.3s ease-in-out, top 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out; /* Smooth transition for position and size */
  width: 30px; /* Small rounded square */
  height: 30px; /* Small rounded square */
  border-radius: 50%; /* Rounded shape */
}

.toggle-button.inside {
  right: 10px; /* Adjust position inside the sidebar when expanded */
  top: 10px; /* Keep button at the top inside the expanded sidebar */
  width: auto; /* Auto width for expanded state */
  height: auto; /* Auto height for expanded state */
  border-radius: 4px; /* Default border radius */
}
</style>
