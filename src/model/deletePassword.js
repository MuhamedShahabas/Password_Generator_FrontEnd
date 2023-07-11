import { db, deleteDoc, doc } from "../config/firbase";
import { getLocalData } from "../utils/localStorage";
import { verifyToken } from "../utils/verifyToken";


export const deletePassword = async (id) => {
  try {
    const { email } = verifyToken(getLocalData());
    await deleteDoc(doc(db, email, id));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
