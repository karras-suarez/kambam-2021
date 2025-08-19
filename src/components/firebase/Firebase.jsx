import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, get, child, push } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);
getAuth(app);

export const postQuestion = (question, answer = "") => {
  const updates = {
    question,
    answer,
  };

  return push(ref(db, "questions"), updates);
};

export const listen = (formatter, setter) => {
  return onValue(dbRef, (snapshot) => {
    const { questions } = snapshot.val();
    const formated = formatter(questions);
    setter(formated);
  });
};

export const getPSWD = async() => {
  try {
    const p = await get(child(dbRef, 'pwd'));
    if (p.exists()) {
      return p.val();
    } else {
      return null;
    }
  } catch (error) {
      console.log("error", error);
  }
}

export const getQuestions = async () => {
  try {
    const snap = await get(child(dbRef, 'questions'));
    if (snap.exists()) {
      return snap.val();
    } else {
      return [];
    }
  } catch (error) {
    console.log("error", error)
  }
};
