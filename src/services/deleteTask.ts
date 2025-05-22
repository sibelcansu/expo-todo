import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '~/src/services/firebaseConfig';

export const deleteTask = async (taskId: string) => {
  try {
    await deleteDoc(doc(db, 'tasks', taskId));
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};