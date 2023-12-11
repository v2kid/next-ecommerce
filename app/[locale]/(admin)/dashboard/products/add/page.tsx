"use client";
import {
  Product,
  useAddProductMutation,
} from "@/app/store/service/product/product.service";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { toast } from "sonner";

const AddProductPage = () => {
  const initialState: Omit<Product, "_id"> = {
    title: "",
    description: "",
    price: 0,
    weight: 0,
    gender : '',
    image: [],
    category: "",
  };

  const [addProduct, addProductResult] = useAddProductMutation();
  const [formdata, setFormData] = useState(initialState);
  const addImageUrlField = () => {
    setFormData((prevData) => ({
      ...prevData,
      image: [...prevData.image, '']
    }));
  };
  const removeImageField = (index: number) => {
    setFormData((prevData) => {
      const updatedImageUrls = [...prevData.image];
      updatedImageUrls.splice(index, 1); // Remove the element at the specified index
      return { ...prevData, image: updatedImageUrls };
    });
  };
  const handleImgChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedImageUrls = [...prevData.image];
      updatedImageUrls[index] = value;
      return { ...prevData, image: updatedImageUrls };
    });
  };
  const handleAdd = async () => {
    try {
      await addProduct(formdata);
      toast.success('thêm sản phẩm thành công')
      setFormData(initialState)
    } catch (error) {
      console.log(error);
    }
    console.log(formdata)
  };
  return (
    <div className={styles.container}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1},
          input: { color: "white" },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ width: "60ch" }}>
          <label>Title</label>
          <OutlinedInput
          value={formdata.title}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, title: event.target.value }))
          }
          placeholder="Product Title" />
        </FormControl>
        <FormControl sx={{ width: "60ch" }} variant="standard">
          <label>Price</label>
          <OutlinedInput
            id="outlined-controlled"
           value={formdata.price}
           onChange={(event) =>
             setFormData((prev) => ({ ...prev, price: event.target.value }))
           }
          type="number" placeholder="Price" />
        </FormControl>
        <FormControl sx={{ width: "60ch" }} variant="standard">
          <label>Weight</label>
          <OutlinedInput 
            id="outlined-controlled"
           value={formdata.weight}
           onChange={(event) =>
             setFormData((prev) => ({ ...prev, weight: event.target.value }))
           }
          type="number" placeholder="Weight" />
        </FormControl>
        <FormControl sx={{ width: "60ch" }}>
          <label>Category</label>
          <Select
            sx={{ color: "white" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formdata.category}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, category: event.target.value }))
            }
          >
                <MenuItem value={"Shirt"}>Shirt</MenuItem>
                <MenuItem value={"Pant"}>Pant</MenuItem>
                <MenuItem value={"Shoes"}>Shoes</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "60ch" }}>
  <FormLabel id="demo-radio-buttons-group-label" sx={{ color : 'white'}}>Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    onChange={(event) =>
      setFormData((prev) => ({ ...prev, gender: event.target.value }))
    }
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="unisex" control={<Radio />} label="Unisex" />
  </RadioGroup>
</FormControl>
        <FormControl fullWidth>
          <label>Description</label>
          <OutlinedInput 
          value={formdata.description}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, description: event.target.value }))
          }
          rows={100} placeholder="Please enter text" />
        </FormControl>
        {formdata.image.map((url, index) => (
        <FormControl sx={{ width: "60ch"}} key={index}>
          <label>Image {index +1}</label>
          <>
          <OutlinedInput 
          value={url}
          onChange={(e :any) => handleImgChange(e, index)}
          placeholder={`Image Url ${index}`} />
            <Button onClick={() => removeImageField(index)}>Remove</Button>
          </>
           
        </FormControl>
      ))}
        
      </Box>
      <Button
          component="label"
          variant="contained"
          onClick={addImageUrlField}
          startIcon={<CloudUploadIcon />}
        >
          Add Image
          {/* <VisuallyHiddenInput type="file" /> */}
        </Button>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          onClick={handleAdd}
        >
          Add
          {/* <VisuallyHiddenInput type="file" /> */}
        </Button>
    </div>
  );
};

export default AddProductPage;
