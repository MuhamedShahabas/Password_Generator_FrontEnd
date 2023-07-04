import { useMemo } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { toast } from "react-hot-toast";
import copyToClipboardIMG from "../../public/images/copy.png";
import deleteIMG from "../../public/images/bin.png";
import { deletePassword, getLocalData } from "../utils/localStorage";

function Table({ className, data, setData }) {
  const tableCustomStyles = {
    headCells: {
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        background: "dimgrey",
      },
    },
  };

  createTheme(
    "solarized",
    {
      text: {
        primary: "white",
        secondary: "white",
      },
      background: "transparent",
      divider: {
        default: "grey",
      },
    },
    "dark"
  );

  const columns = useMemo(
    () => [
      {
        name: "Name",
        sortable: true,
        selector: (row) => row.name,
      },
      {
        name: "Actions",
        selector: (row) => (
          <>
            <button
              onClick={() => {
                navigator.clipboard.writeText(row.password);
                return toast.success("Copied to clipboard", {
                  id: "copy",
                  duration: 1000,
                });
              }}
            >
              <img
                src={copyToClipboardIMG}
                alt="Copy Password"
                className="w-6 h-6 mr-1"
              />
            </button>
            <button
              onClick={() =>
                toast(
                  (t) => (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold">Delete Password</span>
                      <span className="flex flex-col gap-2">
                        <input
                          type="text"
                          value={row.name}
                          name="name"
                          id="name"
                          disabled
                          className="text-sm border rounded-md p-2"
                        />
                      </span>
                      <div className="flex justify-between gap-2 mt-2">
                        <button
                          className="border active:animate-ping rounded-md text-white bg-green-400 p-2"
                          type="submit"
                          onClick={() => {
                            deletePassword(row.name);
                            setData(getLocalData());
                            return toast.success(`${row.name} deleted`);
                          }}
                        >
                          Confirm
                        </button>
                        <button
                          type="button"
                          className="border active:animate-ping rounded-md text-white bg-red-400 p-2"
                          onClick={() => toast.dismiss(t.id)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ),
                  {
                    position: "top-center",
                  }
                )
              }
            >
              <img src={deleteIMG} alt="Delete Password" className="w-6 h-6" />
            </button>
          </>
        ),
      },
      {
        name: "Password",
        grow: 2,
        selector: (row) => row.password,
      },
    ],
    []
  );

  return (
    <DataTable
      className={`${className} min-w-max`}
      columns={columns}
      data={data}
      fixedHeader
      customStyles={tableCustomStyles}
      responsive
      highlightOnHover
      persistTableHead
      pagination
      theme="solarized"
      noDataComponent={
        <p className="my-8 font-semibold">No saved passwords.</p>
      }
    ></DataTable>
  );
}

export default Table;
