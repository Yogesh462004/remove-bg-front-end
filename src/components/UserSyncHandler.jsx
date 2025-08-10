import { useAuth, useUser } from "@clerk/clerk-react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import axios from "axios";
import toast from "react-hot-toast";

export const UserSyncHandler = () => {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);
  const { backendurl,loadUserCredits } = useContext(AppContext);


  useEffect(() => {
    const saveUser = async () => {
      if (!isLoaded || !isSignedIn || synced) return;

      try {
        const token = await getToken();
        const userdata = {
          clerkId: user.id,
          email: user.primaryEmailAddress.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          photoUrl:user.imageUrl
        };

        await axios.post(`${backendurl}/users`, userdata, {
          headers: { "Authorization": `Bearer ${token}` }
        });

        setSynced(true); // prevent re-posting
        await loadUserCredits();
        // toast.success("User synced successfully");

      } catch (error) {
        toast.error("Unable to sync, please try again");
      }
    };

    saveUser();
  }, [isLoaded, isSignedIn, getToken, synced]);

  return null;
};
