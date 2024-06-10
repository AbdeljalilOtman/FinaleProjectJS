<template>
    <div class="editor-sidebar">
      <div v-if="selectedText">
        <textarea v-model="editableText" rows="4"></textarea>
        <button @click="applyChanges">Apply</button>
        <button @click="cancelChanges">Cancel</button>
      </div>
      <div v-else>
        <p>Select a text element to edit.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'EditorSidebar',
    props: {
      selectedText: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        editableText: ''
      };
    },
    watch: {
      selectedText(newValue) {
        this.editableText = newValue;
      }
    },
    methods: {
      applyChanges() {
        this.$emit('update-text', this.editableText);
        this.editableText = ''; // Clear after applying
      },
      cancelChanges() {
        this.editableText = this.selectedText; // Reset to original
      }
    }
  }
  </script>
  
  <style scoped>
  .editor-sidebar {
    border-left: 1px solid #ccc;
    padding: 20px;
    width: 300px;
  }
  textarea {
    width: 100%;
    margin-bottom: 10px;
  }
  </style>
  