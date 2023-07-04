import { Link } from "react-router-dom";
import Table from "../Components/Table";
import { getLocalData } from "../utils/localStorage";
import { useEffect, useState } from "react";
import PlusSVG from "../Components/UI/PlusSVG";

function SavedPasswords() {
  const [savedPasswords, setSavedPasswords] = useState([]);

  useEffect(() => setSavedPasswords(getLocalData), []);

  return (
    <div className="card">
      <div className="card-inner flex flex-col">
        <h1 className="title">Saved Passwords</h1>
        <Table
          className="px-1"
          data={savedPasswords}
          setData={setSavedPasswords}
        />
        <Link to="/" className="newPasss-button mx-auto my-4">
          <span className="button__text">Generate</span>
          <span className="button__icon">
            <PlusSVG />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SavedPasswords;
