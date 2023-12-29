import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import bcrypt from "bcrypt";
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

export async function getDBById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(userData: { email: string }) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data.length > 0) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(
  userData: {
    fullname: string;
    email: string;
    password: string;
    role?: string;
    type?: string;
  },
  callback: Function
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data.length > 0) {
    callback({ status: false, message: "Email already exist" });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = userData.role ? userData.role : "user";
    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback({ status: true, message: "Register success" });
      })
      .catch((error) => {
        callback({ status: false, message: error.message });
      });
  }
}

export async function signInWithGoogle(
  userData: {
    fullname: string;
    email: string;
    image: string;
    role: string;
    type: string;
  },
  callback: Function
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );
  const snapshot = await getDocs(q);
  const data: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data.length > 0) {
    userData.role = data[0].role;
    await updateDoc(doc(db, "users", data[0].id), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign in with Google success",
          data: userData,
        });
      })
      .catch((error) => {
        callback({
          status: false,
          message: `Sign in with Google failed : ${error.message}`,
        });
      });
  } else {
    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign in with Google success",
          data: userData,
        });
      })
      .catch((error) => {
        callback({
          status: false,
          message: `Sign in with Google failed : ${error.message}`,
        });
      });
  }
}
