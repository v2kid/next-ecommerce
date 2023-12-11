"use client";
import {
  Product,
  useGetDetailQuery,
  useUpdateProductMutation,
} from "@/app/store/service/product/product.service";
import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { toast } from "sonner";
export default function EditProduct({ id }: any) {
  const { data , isFetching } = useGetDetailQuery(id);
  const initialState: Omit<Product, "_id"> = {
    title: "",
    description: "",
    price: undefined,
    gender: "",
    weight: undefined,
    image: [],
    category: "",
  };
  const [formdata, setFormData] = useState(initialState);
  const [updateProduct, updateProductResult] = useUpdateProductMutation();
  const [mainImg, setMainImg] = useState(0);
  useEffect(() => {
    setFormData(data);
  }, [data]);
  const addImageUrlField = () => {
    setFormData((prevData) => ({
      ...prevData,
      image: [...prevData.image, ""],
    }));
  };
  if (!data) return null;
  const handleImgChange = (e: any, index: number) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedImageUrls = [...prevData.image];
      updatedImageUrls[index] = value;
      return { ...prevData, image: updatedImageUrls };
    });
  };
  const removeImageField = (index: any) => {
    setFormData((prevData) => {
      const updatedImageUrls = [...prevData.image];
      updatedImageUrls.splice(index, 1); // Remove the element at the specified index
      return { ...prevData, image: updatedImageUrls };
    });
    setMainImg(0);
  };

  const handleSubmit = async () => {
    try {
      const filteredImageArray = formdata.image.filter((item) => item !== "");
      const updatedFormData = { ...formdata, image: filteredImageArray };
      setFormData({
        ...formdata,
        image: filteredImageArray,
      });
      await updateProduct({
        id: id,
        body: updatedFormData,
      });
      console.log(formdata);
      toast.success("Event has been created");
    } catch (error) {
      // Handle the error (e.g., log it, show an error message to the user)
      console.error("Error updating product:", error);
    }
  };
  return (
    <>
      {formdata && (
        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
              {formdata.image.length != 0 && formdata.image[mainImg] != "" ? (
                <>
                  <Image src={formdata.image[mainImg] || ""} fill alt={""} />
                  <IconButton
                    onClick={() => removeImageField(mainImg)}
                    aria-label="fingerprint"
                    color="warning"
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={() => removeImageField(mainImg)}
                  aria-label="fingerprint"
                  color="warning"
                >
                  <label> Invalid Image</label>
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
            <div className="flex flex-row">
              {formdata.image.map((item, index) => {
                if (item != "") {
                  return (
                    <Image
                      className={styles.imgChilds}
                      height={50}
                      width={50}
                      src={item}
                      alt={""}
                      onClick={() => {
                        setMainImg(index);
                      }}
                      key={index}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.form}>
              <label>Title</label>
              <input
                type="text"
                name="title"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    title: event.target.value,
                  }))
                }
                placeholder={formdata.title}
              />
              <label>Price</label>
              <input
                type="number"
                name="price"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    price: event.target.value,
                  }))
                }
                placeholder={formdata.price}
              />
              <label>Weight</label>
              <input
                type="number"
                name="weight"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    weight: event.target.value,
                  }))
                }
                placeholder={formdata.weight}
              />
              <label>Category</label>
              <Select
                sx={{ color: "white", bgcolor: "var(--bg)" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formdata.category}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    category: event.target.value,
                  }))
                }
              >
                <MenuItem value={formdata.category}>
                  {formdata.category}
                </MenuItem>
                <MenuItem value={"Shirt"}>Shirt</MenuItem>
                <MenuItem value={"Pant"}>Pant</MenuItem>
                <MenuItem value={"Shoes"}>Shoes</MenuItem>
              </Select>
              <FormControl sx={{ width: "60ch" }}>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ color: "white" }}
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      gender: event.target.value,
                    }))
                  }
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="unisex"
                    control={<Radio />}
                    label="Unisex"
                  />
                </RadioGroup>
              </FormControl>
              <label>Description</label>
              <textarea
                name="desc"
                id="desc"
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: event.target.value,
                  }))
                }
                placeholder={formdata.description}
              ></textarea>
              {formdata.image.map((url, index) => (
                <>
                  <label>image {index}</label>
                  <input
                    key={index}
                    type="text"
                    name="title"
                    placeholder={url}
                    onChange={(e: any) => handleImgChange(e, index)}
                  />
                </>
              ))}
              <Button
                component="label"
                variant="contained"
                onClick={addImageUrlField}
                startIcon={<CloudUploadIcon />}
              >
                Add Image
                {/* <VisuallyHiddenInput type="file" /> */}
              </Button>
              <button onClick={handleSubmit}>Update</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
