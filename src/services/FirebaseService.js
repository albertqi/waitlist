import { db } from "../firebase.config";
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

const waitlistCollection = collection(db, "waitlist");

export const freeField = async (fieldName, field) => {
    const q = query(waitlistCollection, where(fieldName, "==", field));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
};

export const addUser = async (formData) => {
    await addDoc(waitlistCollection, formData);
};