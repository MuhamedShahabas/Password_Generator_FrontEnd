import { Link, useNavigate } from "react-router-dom";
import Table from "../Components/Table";
import { useEffect, useState } from "react";
import PlusSVG from "../Components/UI/PlusSVG";
import { getAllPasswordsAPI } from "../model/getPasswords";
import { toast } from "react-hot-toast";
import { getAuth } from "firebase/auth";
import { getLocalData, saveLocally } from "../utils/localStorage";
import LogOut from "../Components/LogOut";

function SavedPasswords() {
  const [savedPasswords, setSavedPasswords] = useState([]);
  const [pending, setPending] = useState(true);
  const navigate = useNavigate();

  const fetchAllPasswordsAPI = async () => {
    setPending(true);
    getAllPasswordsAPI()
      .then((data) => {
        const allPasswords = data.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setSavedPasswords(allPasswords);
        setPending(false);
      })
      .catch(() => {
        return toast.error("Error loading passwords");
      });
  };

  useEffect(() => {
    const token = getLocalData();
    if (!token) {
      const { currentUser } = getAuth();
      currentUser
        .getIdToken()
        .then((token) => {
          saveLocally(token);
        })
        .catch(() => navigate("/"));
    }
    fetchAllPasswordsAPI();
  }, []);

  return (
    <div className="card w-full p-3 lg:w-auto lg:p-0">
      <div className="card-inner flex flex-col">
        <h1 className="title">Saved Passwords</h1>
        <Table
          className="px-1"
          pending={pending}
          data={savedPasswords}
          fetchPasswords={fetchAllPasswordsAPI}
        />
        <Link to="/" className="newPasss-button mx-auto my-4">
          <span className="button__text">Generate</span>
          <span className="button__icon">
            <PlusSVG />
          </span>
        </Link>
        <LogOut path="/" />
      </div>
    </div>
  );
}

export default SavedPasswords;
