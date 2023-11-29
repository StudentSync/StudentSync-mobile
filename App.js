import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Office from './src/screens/Office';
import RegisterTeacher from './src/screens/RegisterTeacher';
import RegisterStudent from './src/screens/RegisterStudent';
import Configuration from './src/screens/Configuration';
import Main from './src/components/BottomTabs';
import ProfileStudent from './src/screens/ProfileStudent';
import ProfileTeacher from './src/screens/ProfileTeacher';
import OfficeDevelop from './src/screens/Office-develop';
import { RoleProvider } from './src/contexts/RoleContext';

import AuthProvider from './src/contexts/auth';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'black': require('./assets/fonts/Axiforma-Black.ttf'),
        'bold': require('./assets/fonts/Axiforma-Bold.ttf'),
        'medium': require('./assets/fonts/Axiforma-Medium.ttf'),
        'thin': require('./assets/fonts/Axiforma-Thin.ttf'),
        'light': require('./assets/fonts/Axiforma-Light.ttf'),
      });
      setIsFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!isFontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer style={styles.main}>
      <RoleProvider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stack.Screen name="Office" component={Office} options={{ headerShown: false }}/>
          <Stack.Screen name="RegisterTeacher" component={RegisterTeacher} options={{ headerShown: false }}/>
          <Stack.Screen name="RegisterStudent" component={RegisterStudent} options={{ headerShown: false }}/>
          <Stack.Screen name="Configuration" component={Configuration} options={{ headerShown: false }}/>
          <Stack.Screen name="ProfileTeacher" component={ProfileTeacher} options={{ headerShown: false }}/>
          <Stack.Screen name="ProfileStudent" component={ProfileStudent} options={{ headerShown: false }}/>
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
          <Stack.Screen name="OfficeDevelop" component={OfficeDevelop} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </RoleProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "black",
    color: "#fff",
    backgroundColor: "#223843",
  },
});