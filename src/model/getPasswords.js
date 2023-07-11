import { verifyToken } from "../utils/verifyToken";
import { db, collection, getDocs } from "../config/firbase";
import { getLocalData } from "../utils/localStorage";

export const getAllPasswordsAPI = () => {
  const { email } = verifyToken(getLocalData());
  return new Promise((resolve, reject) => {
    getDocs(collection(db, email))
      .then((querySnapshot) => {
        resolve(querySnapshot);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
