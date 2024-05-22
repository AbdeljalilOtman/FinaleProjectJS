// uploadTemplate.js
import { db, storage } from './config.js';

document.getElementById('fileInput').addEventListener('change', async (event) => {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onload = async function(event) {
      const htmlContent = event.target.result;
      const templateName = file.name;
      const storageRef = storage.ref('templates/' + templateName);
      
      try {
        // Upload the HTML content as a string to Firebase Storage
        await storageRef.putString(htmlContent, 'raw', { contentType: 'text/html' });
        console.log('File uploaded successfully!');

        // Get the download URL of the uploaded file
        const url = await storageRef.getDownloadURL();
        
        // Store the file metadata in Firestore
        const docRef = await db.collection('templates').add({
          name: templateName,
          content: htmlContent,
          url: url,
          type: 'html'
        });

        console.log('Template metadata saved with ID:', docRef.id);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
    
    reader.readAsText(file);
  } else {
    console.error('No file selected');
  }
});
