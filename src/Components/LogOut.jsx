import { getAuth } from "firebase/auth";
import { deleteLocalData } from "../utils/localStorage";
import { useNavigate } from "react-router";

// eslint-disable-next-line react/prop-types
function LogOut({ path }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mb-2">
      <button
        onClick={() => {
          const auth = getAuth();
          deleteLocalData();
          auth.signOut();
          navigate(path);
        }}
        className="relative inline-block px-4 py-2 text-sm group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          Log out
        </span>
      </button>
    </div>
  );
}

export default LogOut;
