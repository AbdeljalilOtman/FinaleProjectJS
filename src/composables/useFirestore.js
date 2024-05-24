import {projectFirestore} from '@/firebase/config.js';

// Save a new change
export const saveChange = async (userId, templateData) => {
  try {
    const docRef = await projectFirestore.collection('userChanges').doc()
    docRef.set({
      userId: userId,
      templateData: templateData,
      timestamp: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Retrieve recent changes by a user
export const getRecentChanges = async (userId) => {
  try {
    const querySnapshot = await projectFirestore.collection('userChanges').where('userId', '==', userId).orderBy('timestamp', 'desc').get();
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
};

// Update an existing change
export const updateChange = async (docId, updatedData) => {
  try {
    await projectFirestore.collection('userChanges').doc(docId).update(updatedData);
    console.log("Document updated with ID: ", docId);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
