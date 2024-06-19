import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ListItem, useGetListQueryQuery } from "@/src/generated";
import Loading from "./LoadingSpinner";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function DataTable() {
  const { data, loading, error } = useGetListQueryQuery();

  const columns: GridColDef[] = [
    { field: "statusType", headerName: "Status", width: 130 },
    { field: "title", headerName: "Title", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 130,
      renderCell: (params) => (
        <>
          <MdDeleteOutline
            style={{ fontSize: "16px", cursor: "pointer", marginRight: 8 }}
          />
          <CiEdit style={{ fontSize: "16px", cursor: "pointer" }} />
        </>
      ),
    },
  ];

  const rows = data?.getListQuery ?? [];

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
}
