import axios from 'axios';
import React, { createContext } from 'react';
import { baseUrl } from './endpoints';
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {


  const useLogin = async ({ email, password }) => {
    try {
      const res = await fetch(`${baseUrl}/auth/user/login`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const response = await res.json();

      console.log(response);
      console.log("clicked");

    } catch (error) {
      console.error('An error occurred:', error);
    }
  }


  const useRegister = async (registerData) => {

    console.log(registerData);
    const data = {
      name: "sihab",
      email: "sihab@gmail.com",
      password: "123456"
    }


    // try {
    //   const res = await fetch("http://localhost:8000/api/v1/auth/user/register", {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   });
    //   const response = await res.json();

    //   console.log(response);
    //   console.log("clicked");

    // } catch (error) {
    //   console.log(error);
    // }

    const res = axios.post('http://localhost:8000/api/v1/auth/user/register', data)
      .then((response) => {
        console.log('Data posted successfully:', response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });

    console.log(res);

  }

  const contextInfo = {
    user: 'sihabmolla',
    useLogin,
    useRegister
  }

  return (
    <AuthContext.Provider value={contextInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;