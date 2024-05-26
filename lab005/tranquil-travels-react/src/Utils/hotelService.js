import { getDoc, addDoc, collection, query, where, serverTimestamp, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore, auth } from "./firebase.utils.js";

export const createHotel = async (newHotel) => {

  const tempHotel = {
    ...newHotel, // {id: ..., text: ... }
    userId: auth?.currentUser.uid,
    created: serverTimestamp()
  }
  const hotelsCollection = collection(firestore, "hotels");
  const docRef = await addDoc(hotelsCollection, tempHotel);
  console.log("Document added:", docRef.id);
}

export const readHotels = async () => {
  const hotels = [];

  const hotelsCollection = collection(firestore, "hotels");

  const q = query(hotelsCollection);
  const results = await getDocs(q);

  results.forEach(doc => {
    // todos.push(doc.data()) // pobiera sam obiekt
    hotels.push({ id: doc.id, ...doc.data() }); // pobiera obiekt i jego Firestore'owe ID
  })

  return hotels;
}
export const readHotel = async (hotel_id) => {
  console.log('Hotel id: ' + hotel_id);
  const docRef = doc(firestore, "hotels", hotel_id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
      return null;
  }
}

/*
// UWAGA:
// jako ID można przyjąć pole, jakie się samemu nada - patrz linijka 7
// albo ID documentu, który generuje Firestore
export const updateTodo = async (todoId, updatedTodo) => {
  // UWAGA: jeżeli sp©óbujesz zmienić obiekt nienależący do aktualnego użytkownika
  // i masz reguły na Firestore, to Ci wyskoczy error.
  const todoDocRef = doc(firestore, "todos", todoId);
  try {
    await updateDoc(todoDocRef, updatedTodo);
    console.log("Todo updated:", todoId);
  } catch (error) {
    console.error("Error updating todo:", error);
  }
}


export const deleteTodo = async (todoId) => {
  // tak samo jak updateTodo
  const todoDocRef = doc(firestore, "todos", todoId);
  try {
    await deleteDoc(todoDocRef);
    console.log("Todo deleted:", todoId);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}
*/
