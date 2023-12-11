"use client";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "@/app/store/service/users/user.service";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  colors,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function EditComponent({ id }: { id: string }) {
  const router = useRouter();
  interface User {
    name: string;
    email: string;
    password: string;
    roles: [string];
  }
  const initialState: User = {
    name: "",
    email: "",
    password: "",
    roles: [null],
  };
  const [updateUser, updateUserResult] = useUpdateUserMutation();

  const { data } = useGetUserQuery(id);
  const [formdata, setFormData] = useState<User>(initialState);
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleUpdate = async () => {
    try {
      await updateUser({ id: id, body: formdata }).unwrap;
    } catch (error) {
      console.log(error);
    }
  };
  if (updateUserResult.isSuccess) {
    router.push("/dashboard/users");
  }
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === 'isAdmin') {
  //     setFormData({
  //       ...formdata,
  //       roles: value === 'Yes' ? ['admin'] : ['user'],
  //     });
  //   } else {
  //     // Handle other form fields
  //     setFormData({ ...formdata, [name]: value });
  //   }
  // };
  const handleChange = (event: SelectChangeEvent) => {
    setFormData({
      ...formdata,
      roles: event.target.value === "admin" ? ["admin"] : ["user"],
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://i.pinimg.com/736x/08/cc/66/08cc663807610a0f8336bce609d9133e.jpg"
            }
            alt=""
            fill
          />
        </div>
      </div>
      {data && (
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <input type="hidden" name="id" />
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder={formdata.name}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder={formdata.email}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
            />
            <FormControl >
              <InputLabel sx={{ color: "white" }}>
                Roles- {formdata.roles[0]}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Roles"
                onChange={handleChange}
                sx={{backgroundColor: "#182237"}}
              >
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"user"}>User</MenuItem>
              </Select>
            </FormControl>
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
}
