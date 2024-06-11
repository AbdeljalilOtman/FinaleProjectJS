import {projectFirestore} from '@/firebase/config.js';

// Save a new change
export const saveChange = async (userId, templateId, templateData,exported) => {
  try {
    const docRef = await projectFirestore.collection('userChanges').doc()
    console.log(templateData)
    docRef.set({
      userId: userId,
      templateId : templateId,
      templateData: templateData,
      timestamp: new Date(),
      exported: exported
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
export const getRecentChangesById = async (userId, workId) => {
  console.log(workId)
  try {
    const querySnapshot = await projectFirestore.collection('userChanges').doc(workId).get();

    // Map through each document and return its data along with the document ID
    const document ={
      id: querySnapshot.id,
      ...querySnapshot.data()
    };

    console.log(document);
    return document;
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
};

export const getUserData = async (userId) => {
  try {
    const querySnapshot = await projectFirestore.collection('users').doc(userId).get();
    return querySnapshot.data();
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
}
// Update an existing change
export const updateChange = async (docId, updatedData) => {
  try {
    await projectFirestore.collection('userChanges').doc(docId).update(updatedData);
    console.log("Document updated with ID: ", docId);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const getExportedCvs =async (userId) => {
  try {
    const querySnapshot = await projectFirestore.collection('userChanges').where('userId', '==', userId).where('exported', '==', true).get();
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
}



