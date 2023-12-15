"use client";
import { redirect, usePathname, useRouter } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdLogout,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import Cookies from 'js-cookie'
import React from "react";
import { IconButton } from "@mui/material";

const Navbar = () => {
  const pathname = usePathname();
  const SignOut=()=>{
    Cookies.remove('token')
    router.push('/login')
  }
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
          <IconButton
            aria-label="delete"
            color="primary"
            size="small"
            onClick={SignOut}
          >
            <MdLogout fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
