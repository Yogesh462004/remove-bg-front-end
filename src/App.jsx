import { Toaster } from "react-hot-toast";
import { Footer } from "./components/Footer";
import MenuBar from "./components/MenuBar"
import { Home } from "./pages/Home";
import { Routes,Route } from 'react-router-dom';
import {UserSyncHandler} from "./components/UserSyncHandler"
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Result } from "./pages/Result";
import BuyCredits from "./pages/BuyCredits";

 export const App=()=>{
  return(
    <div>
      <UserSyncHandler/>
         <MenuBar/>
         <Toaster/>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pricing"element={<BuyCredits/>}/>
          <Route path="/result" element={
            <>
            <SignedIn>
              <Result/>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn/>
            </SignedOut>
            </>
          }/>
         </Routes>
         <Footer/>
    </div>
  )
}
