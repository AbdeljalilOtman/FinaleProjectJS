import { projectFirestore } from '../firebase/config.js';

const getTemplate = async (desiredPostId) => {
  try {
    const docRef = projectFirestore.collection('templates').doc(desiredPostId);
    const docSnapshot = await docRef.get();

    if (docSnapshot.exists) {
      return docSnapshot.data(); 
      console.warn(`No article found with ID: ${desiredPostId}`);
      return null; // Or return a specific value to indicate no document found
    }
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error; // Re-throw the error for further handling (optional)
  }
};

export default getTemplate;