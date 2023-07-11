import { db, collection, addDoc } from "../config/firbase";
import { toast } from "react-hot-toast";

export const createDB = (email, newPassword) => {
  const passwordCollection = collection(db, email);

  addDoc(passwordCollection, newPassword)
    .then(() => {
      return toast.success(`Password Saved`);
    })
    .catch((error) => {
      console.log(error);
      return toast.error("Please try again");
    });
};
