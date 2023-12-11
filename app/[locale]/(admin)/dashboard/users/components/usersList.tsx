"use client";
import styles from "@/app/ui/dashboard/users/users.module.css";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "@/app/store/service/users/user.service";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import { useDispatch } from "react-redux";
import { startEditUser } from "@/app/store/service/users/userSlice";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  TextField,
  alpha,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { toast } from "sonner";
export default function UsersList() {
  const [keyword, setKeyword] = useState("");
  const { data } = useGetUsersQuery(keyword);
  const [deleteUser,{ error }] = useDeleteUserMutation();
  const dispatch = useDispatch();
  const startEdit = (id: any) => {
    dispatch(startEditUser(id));
  };
  const handledelete = async (id: any) => {
     await deleteUser(id);
  };
  // if (!data) {
  //   return null;
  // }
  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "roles",
      headerName: "Roles",
      width: 200,
      editable: true,
      renderCell: (params) => (
        <div>
          {params.value.map((role, index) => (
            <span key={index}>{role}</span>
          ))}
        </div>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <div>
          <Link href={`/dashboard/users/${params.row._id}`}>
            <IconButton
              aria-label="view"
              color="primary"
              size="small"
              onClick={startEdit}
            >
              <RemoveRedEyeIcon fontSize="small" />
            </IconButton>
          </Link>
          <IconButton
            aria-label="delete"
            color="primary"
            size="small"
            onClick={() => handledelete(params.row._id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      ),
    },
  ];
  return (
    <>
     <div className={styles.containersearch}>
     <MdSearch />
      <input
        type="text"
        placeholder='search by name'
        className={styles.input}
        value={keyword}
        onChange={(event)=>setKeyword(event.target.value)}
      />
     </div>
      {data && (
        <Box paddingTop={5} sx={{ height: 400, width: "100%" }}>
          <DataGrid
            sx={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: "#EEF1F6",
            }}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            getRowId={(row) => row._id}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            rows={data}
          />
        </Box>
      )}
    </>
  );
}
