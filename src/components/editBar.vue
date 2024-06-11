<template>
  <nav class="edit-bar top-0 z-10 shadow-sm">
    <ul class="container flex justify-between items-center space-x-6">
      <li>
        <input type="file" @change="onFileChange" accept="image/*" class="file-input form-control-file" />
      </li>
      <li>
        <button @click="addSection" class="nav-button">Add Section</button>
      </li>
      <li>
        <button class="nav-button">Modify Sections</button>
      </li>
      <li>
        <button @click="exportPDF" class="nav-button">Save & Export</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'editBar',
  methods: {
    onFileChange (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.$emit('editProfPic', e.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    addSection() {
      const sectionName = prompt("Enter the name of the new section:");
      if (sectionName) {
        this.$emit('addSection', sectionName);
      }
    },
    exportPDF() {
      this.$emit('exportAsPDF');
    }
  }
}
</script>

  <style scoped>
  .edit-bar {
    background-color: #5c7370; /* Better green color */
    width: 80%;
    height: 50px; /* Less height */
    top: 0;
    z-index: 10;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  
  .nav-button {
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-button:hover {
    background-color: #e9c46a; 
    color: #000;
    border-radius: 0.25rem;
  }
  </style>
  