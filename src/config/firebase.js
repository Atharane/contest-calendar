import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC6zqf8M2RHd_P-YwYfi5nI6yXjB38MJtM",
  authDomain: "contest-calendar-98247.firebaseapp.com",
  projectId: "contest-calendar-98247",
  storageBucket: "contest-calendar-98247.appspot.com",
  messagingSenderId: "311203052875",
  appId: "1:311203052875:web:f7b2d247f595a4440e3cce",
  measurementId: "G-GCC8KSQEQK",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)