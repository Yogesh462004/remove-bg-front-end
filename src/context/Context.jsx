import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import {createContext, useState} from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const AppContext=createContext();

const AppProvider=(props)=>{

    const backendurl=import.meta.env.VITE_BACKEND_URL;
    const[credits,setCredits]=useState(false)
    const{getToken}=useAuth();
    const [image,setimage]=useState(false)
    const[resultImage,setresultImage]=useState(false)
    const{isSignedIn}=useUser();
    const{openSignIn}=useClerk();
    const navigate=useNavigate();
    const loadUserCredits=async ()=>{
        try{
           const token= await getToken();
          const response= await axios.get(backendurl+"/users/credits",{headers: { "Authorization": `Bearer ${token}`}})
          if(response.data.success){
            setCredits(response.data.data.credits)
          }else{
            toast.error("Error Loading Credits");
          }
        }catch(e){
            toast.error("Error Loading Credits")
        }

    }
    const removebg = async (selectedImage) => {
  try {
    if (!isSignedIn) {
      return openSignIn();
    }
    setimage(selectedImage);
    setresultImage(false);
    navigate("/result");

    const token = await getToken();
    const formdata = new FormData();
    if (selectedImage) formdata.append("file", selectedImage);

    const { data: base64image } = await axios.post(
      `${backendurl}/images/remove-background`,
      formdata,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setresultImage(`data:image/png;base64,${base64image}`);
    setCredits((prev) => prev - 1);
  } catch (e) {
    console.log(e);
    toast.error("Error While Removing Background");
  }
};

    const contextValue={
            backendurl,
            credits,
            setCredits,loadUserCredits,image,setimage,resultImage,setresultImage,removebg
}
    return(
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppProvider;