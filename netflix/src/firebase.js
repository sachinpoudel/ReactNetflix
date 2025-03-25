// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {addDoc, collection, getFirestore} from "firebase/firestore"
import {createUserWithEmailAndPassword,EmailAuthProvider,getAuth, 
    signInWithEmailAndPassword,
    signOut} from "firebase/auth";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAjWfv1SLoI8ms25GsOoVm41b8K6hc2X9E",
  authDomain: "netflix-clone-42116.firebaseapp.com",
  projectId: "netflix-clone-42116",
  storageBucket: "netflix-clone-42116.firebasestorage.app",
  messagingSenderId: "529711251211",
  appId: "1:529711251211:web:9348ee352b4b52037e2c0e",
  measurementId: "G-PX5MKJ6BP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name,email,password) => {
try{
const res = await createUserWithEmailAndPassword(auth,email,password)
const user = res.user;
await addDoc(collection(db,"user") ,{
    uid:user.uid,
    name,
    authProvider: "local",
    email,
})
}catch(e){
console.log(e)
toast.error(e.code.split('/')[1].split('-').join(" "))


}
}
const login = async() =>{
try{
signInWithEmailAndPassword(auth(auth,email,password));l

}catch(e){
console.log(e)
toast.error(e.code.split('/')[1].split('-').join(" "))
}
}
const logout = () =>{
    signOut(auth)
}
export {auth,db,login,signUp,logout}