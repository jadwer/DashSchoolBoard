import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmaZU7xDNubOixyzcbnGZzliBJpWZFvR0",
  authDomain: "dashschoolboard.firebaseapp.com",
  projectId: "dashschoolboard",
  storageBucket: "dashschoolboard.appspot.com",
  messagingSenderId: "1026345606398",
  appId: "1:1026345606398:web:2d9dcd090391b24c6519af",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
