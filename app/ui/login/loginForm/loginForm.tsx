"use client";

import React, { useState } from "react";
import styles from "./loginForm.module.css";
import { useSignInMutation } from "@/app/store/service/auth/auth.service";
import { redirect, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "sonner";
export default function LoginForm() {
  interface LoginFrom {
    email: string;
    password: string;
  }
  const initialState: LoginFrom = {
    email: "",
    password: "",
  };
  const [signIn, signInresult] = useSignInMutation();
  const [loginForm, setLoginForm] = useState(initialState);

  const router = useRouter();
  const handleSubmit = async () =>{
    await signIn(loginForm)
     .unwrap()
  .then((payload) => {
  const accessToken = payload.accessToken
  Cookies.set('token',accessToken)
  }).then(()=>router.push('/dashboard'))
  .catch((error) => toast.warning('some things went wrong'));
    //  const accessToken = signInresult.data.accessToken;
    //  Cookies.set('token', accessToken)
    // router.push('/dashboard')
  }
  // const handleSubmit = async () => {
  //   try {
  //     // Assuming `signIn` is an asynchronous function
  //     const response = await fetch("https://back-end-next14.onrender.com/auth/login", {
  //       method: "POST",
  //       mode: 'cors',
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //         body : JSON.stringify(loginForm)
  //     });
  //     if (response.ok) {
  //       const responseData = await response.json(); // Parse the response body as JSON
  //       const accessToken = responseData.accessToken;
  //       Cookies.set('token', accessToken)
  //       router.push('/dashboard')
  //     } else {
  //       toast.error(response.)
  //       // console.error('Login failed:', response.status, response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error during sign-in:', error);
  //   }
  // };

//  if(signInresult.data.user.roles.include('admin')){

//  }
  // if(signInresult.isSuccess){
  //     localStorage.setItem('token', signInresult.data.accessToken)
  //     localStorage.setItem('user', JSON.stringify(signInresult.data.user))
  //     Cookies.set('token', signInresult.data.accessToken)
  //   redirect('/dashboard')
  // }
  return (
    <div className={styles.form}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={loginForm.email}
        onChange={(event) =>
          setLoginForm((prev) => ({ ...prev, email: event.target.value }))
        }
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={loginForm.password}
        onChange={(event) =>
          setLoginForm((prev) => ({ ...prev, password: event.target.value }))
        }
      />
      <button onClick={handleSubmit} >Login</button>
    </div>
  );
}
