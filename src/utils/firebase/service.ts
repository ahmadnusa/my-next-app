import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const db = getFirestore(app);
export async function getDB(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}
