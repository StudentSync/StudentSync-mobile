import React, { createContext, useState } from 'react';
import SSApi from '../services/SSApi';
import { useNavigation } from "@react-navigation/native";

export const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  const handleRegisterParams = async (userParams) => {
    console.log(userParams.email)

    const response = await SSApi.post('/verify_email', { email: userParams.email })
    if (response.data.message === "Não foi encontrado!") {
      setName(userParams.name);
      setEmail(userParams.email);
      setPassword(userParams.password);
      navigation.navigate('Office')
    } else {
      alert("O Email já está cadastrado!")
    }
  }

  return (
    <RegisterContext.Provider value={{ handleRegisterParams, name, email, password }}>
      {children}
    </RegisterContext.Provider>
  );
}
