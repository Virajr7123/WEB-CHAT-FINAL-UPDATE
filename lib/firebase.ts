import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
import { getAnalytics, isSupported } from "firebase/analytics"

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "ADD API KEY HERE",
  authDomain: "ADD AUTH DOMAIN HERE",
  projectId: "ADD PROJECT ID HERE",
  storageBucket: "ADD STORAGE BUCKET HERE",
  messagingSenderId: "ADD MESSAGING SENDER ID HERE",
  appId: "Add APP ID HERE",
  measurementId: "ADD MEASUREMENT ID HERE",
  databaseURL: "ADD DATABSE URL HERE ", // Add your database URL here
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const auth = getAuth(app)
export const database = getDatabase(app)
export const storage = getStorage(app)

// Initialize Analytics conditionally (it might not be supported in all environments)
export const initializeAnalytics = async () => {
  if (await isSupported()) {
    return getAnalytics(app)
  }
  return null
}

export default app
