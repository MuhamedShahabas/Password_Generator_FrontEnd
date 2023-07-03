import { useMemo } from "react";
import DataTable from "react-data-table-component";
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
        backgroundColor: "#f5f5f5",
      },
    },
  };

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
                return toast.success("Copied to clipboard");
              }}
            >
              <img
                src={copyToClipboardIMG}
                alt="Copy Password"
                className="w-6 h-6 mr-1"
              />
            </button>
            <button
              onClick={() => {
                deletePassword(row.name);
                setData(getLocalData());
                return toast.success(`${row.name} deleted`);
              }}
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
      noDataComponent={
        <p className="my-8 font-semibold">No saved passwords.</p>
      }
    ></DataTable>
  );
}

export default Table;
