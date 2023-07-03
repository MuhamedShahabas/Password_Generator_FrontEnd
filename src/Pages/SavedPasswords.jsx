import { Link } from "react-router-dom";
import Circle from "../Components/Circle";
import Table from "../Components/Table";
import { getLocalData } from "../utils/localStorage";

function SavedPasswords() {
  return (
    <div className="card">
      <Circle />
      <Circle />
      <div className="card-inner flex flex-col">
        <h1 className="title">Saved Passwords</h1>
        <Table className="px-1" data={getLocalData()} />
        <Link to="/" className="newPasss-button mx-auto my-4">
          <span className="button__text">Generate</span>
          <span className="button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              height="24"
              fill="none"
              className="svg"
            >
              <line y2="19" y1="5" x2="12" x1="12"></line>
              <line y2="12" y1="12" x2="19" x1="5"></line>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SavedPasswords;
