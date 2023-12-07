import React, { createContext, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import SSApi from '../services/SSApi';
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  const verifyToken = async () => {
    const token = await SecureStore.getItemAsync('token')
    const user = await SecureStore.getItemAsync('user')

    if (token) {
      SSApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setAuthToken(token)
      setUser(user)
      navigation.navigate('Main')
    } else {
      navigation.navigate('Login')
    }
  }

  const login = async (userParams) => {
    try {
      const response = await SSApi.post('/login', {
        user: {
          email: userParams.email,
          password: userParams.password,
        }
      });

      setAuthToken(response.data['token'])
      setUser(response.data['user_attributes'])
      SSApi.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`

      await SecureStore.setItemAsync('token', JSON.stringify(response.data['token']))
      await SecureStore.setItemAsync('user', JSON.stringify(response.data['user_attributes']))

      navigation.navigate('Main')

      return response
    } catch (error) {
      console.error('Login error:', error);
      alert('Error in login!');
    }
  };

  const registerStudent = async (studentParams) => {
    try {
      const response = await SSApi.post('/students', {
        student: {
          course_id: studentParams.course_id,
          name: studentParams.name,
          semester: studentParams.semester,
          schedule_availability: "-"
        },
        user: {
          email: studentParams.email,
          password: studentParams.password
        }
      })

      setAuthToken(response.data['token'])
      setUser(response.data['user_attributes'])
      SSApi.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`

      await SecureStore.setItemAsync('token', JSON.stringify(response.data['token']))
      await SecureStore.setItemAsync('user', JSON.stringify(response.data['user_attributes']))

      navigation.navigate('Main')

      return response
    } catch (error) {
      console.error('Register error:', error);
      alert('Error in register!');
    }
  }

  const registerTeacher = async (teacherParams) => {
    try {
      const response = await SSApi.post('/professors', {
        professor: {
          name: teacherParams.name,
          schedule_availability: "-",
          description: teacherParams.description,
          academic_degree: teacherParams.academic_degree
        },
        user: {
          email: teacherParams.email,
          password: teacherParams.password
        }
      })

      setAuthToken(response.data['token'])
      setUser(response.data['user_attributes'])
      SSApi.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`

      await SecureStore.setItemAsync('token', JSON.stringify(response.data['token']))
      await SecureStore.setItemAsync('user', JSON.stringify(response.data['user_attributes']))

      navigation.navigate('Main')

      return response
    } catch (error) {
      console.error('Register error:', error);
      alert('Error in register!');
    }
  }


  const logout = async () => {
    await SecureStore.deleteItemAsync('token');

    SSApi.defaults.headers.common['Authorization'] = '';

    setAuthToken(null)

    navigation.navigate('Login')
    navigation.reset()
  }

  return (
    <AuthContext.Provider value={{ authToken, user, login, verifyToken, logout, registerStudent, registerTeacher }}>
      {children}
    </AuthContext.Provider>
  );
}
