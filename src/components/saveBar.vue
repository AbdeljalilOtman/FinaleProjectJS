<template>
  <nav class="edit-bar top-0 z-10 shadow-sm">
    <ul class="container flex justify-between items-center space-x-6">
      <li>
        <input type="file" @change="onFileChange" accept="image/*" class="file-input form-control-file" />
      </li>
      <li>
        <button @click="saveAllChanges" class="nav-button">Save</button>
      </li>

      <li>
        <button @click="exportPDF" class="nav-button">Save & Export</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'saveBar',
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
    saveAllChanges() {
        this.$emit('save');
      
    },
    exportPDF() {
      this.$emit('exportAsPDF');
    }
  }
}
</script>

  <style scoped>
  .edit-bar {
    background: linear-gradient(to right, #932c00, #521800); /* Better green color */
    width: 210mm; /* or 8.27in */
    height:10vh; /* Less height */
    top: 0;
    z-index: 10;
    border-radius: 20px;

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
    background-color: #000000; 
    color: #ffffff;
    border-radius: 20px;
  }
  </style>
  