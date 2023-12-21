'use client'
import {  useAddUserMutation } from "@/app/store/service/users/user.service";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import React, { useState } from "react";
const AddUserPage = () => {
  interface User {
    name : string,
    email : string,
    password : string,
    roles : [string]
  }
  const initialState: User = {
    name : '',
    email: '',
    password: '',
    roles : [null]
  };
  const [addUser ] = useAddUserMutation()
  const [formData, setFormData] = useState<User>(initialState)
  const handleSubmit= async ()=>{
    await addUser(formData).unwrap()
  }
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="username" name="username"  value={formData.name} onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))} required />
        <input type="email" placeholder="email" name="email" value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} required />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password} onChange={(event) => setFormData((prev) => ({ ...prev, password: event.target.value }))} 
          required
        />
        <input type="phone" placeholder="phone" name="phone" /> 
        <select name="isAdmin" id="isAdmin" placeholder="Roles"  onChange={(e)=> setFormData({
      ...formData,
      roles: e.target.value === "admin" ? ["admin"] : ["user"],
    })}>
          <option value={'user'}>User</option>
          <option value={'admin'}>Admin</option>
        </select>
        <select name="isActive" id="isActive">
          <option>
            Is Active?
          </option>
          <option >Yes</option>
          <option >No</option>
        </select>
        <textarea
          name="address"
          id="address"
          // rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    
    </div>
  );
};

export default AddUserPage;
