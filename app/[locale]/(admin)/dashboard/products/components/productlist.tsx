"use client";
import { useDeleteProductMutation, useGetProductsforadminQuery } from "@/app/store/service/product/product.service";
import {  Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { startEditProduct } from "@/app/store/service/product/productSlice";
import { toast } from "sonner";
import { useState } from "react";
export default function ProductList() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");

  const { data } = useGetProductsforadminQuery({keyword,category,gender});
  const [deleteProduct] = useDeleteProductMutation()
  const handledelete=(id:any)=>{
    toast.warning('Delete Forever ?', {
      action: {
        label: 'Yes',
        onClick: async () =>  await deleteProduct(id),
      },
    });
  }
  const dispatch = useDispatch()
  const startEdit = (id: any) => {
    dispatch(startEditProduct(id));
  };
  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable:true
    },
    {
      field: "weight",
      headerName: "Weight",
      width: 150,
      editable:true
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <div>
          <Image src={params.row.image[0]} height={50} width={50} alt={""} />
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
          <Link href={`/dashboard/products/${params.row._id}`}>
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
      {data && (
        <Box sx={{ width: "100%" }}>
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
            checkboxSelection
            disableRowSelectionOnClick
            rows={data}
          />
        </Box>
      )}
    </>
  );
}
