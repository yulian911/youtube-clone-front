
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'



const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY ,
  authDomain:process.env.REACT_APP_AUTH ,
  projectId:process.env.REACT_APP_PROJECT_ID ,
  storageBucket:process.env.REACT_APP_STORAGE ,
  appId:process.env.REACT_APP_Id
};


const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider()
export const auth = getAuth(app);
export default app