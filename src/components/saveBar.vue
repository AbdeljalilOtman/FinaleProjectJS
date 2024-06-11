<template>
  <nav class="edit-bar top-0 z-10 shadow-sm">
    <ul class="container flex justify-between items-center space-x-6">
      <li  class="nav-button">
        <label for="file-input">Edit Profile Picture :</label>
        <input type="file" @change="onFileChange" placeholder="Edit Profile Picture" accept="image/*" class="file-input form-control-file" />
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
    background:transparent;/* Better green color */
    width: 210mm; /* or 8.27in */
    height:10vh; /* Less height */
    top: 0;
    z-index: 10;
    border-radius: 20px;
    position: sticky;
    

  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  label{
      font-weight: 700;
    
  }
  input{
    cursor: pointer;
  }
  .nav-button {
    padding: 0.5rem 1rem;

    background-color: #2564eb3a;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-button:hover {
    background-color: #2564eb;
    color: #ffffff;
    border-radius: 20px;
  }

  </style>
  