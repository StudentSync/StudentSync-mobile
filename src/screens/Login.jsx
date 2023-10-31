import React from "react";
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Fontisto";
import { COLORS } from "../utils/Colors";

const Login = () => {
  const navigation = useNavigation();

  const Register = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Text style={styles.logo}>Bem Vindo</Text>
        <Text style={styles.subTitle}>
          Digite suas credenciais para entrar!
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>EMAIL</Text>
        <View style={styles.viewInput}>
          <Icon2
            style={styles.emailIcon}
            name="email-outline"
            size={28}
            color={COLORS.white}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaa"
            placeholder="johndoe@alu.ufc.br"
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>

        <Text style={styles.label}>SENHA</Text>
        <View style={styles.viewInput}>
          <Icon3
            style={styles.lockedIcon}
            name="locked"
            size={28}
            color={COLORS.white}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaa"
            placeholder="senha1234"
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>

        <TouchableOpacity style={styles.acessButton}>
          <Text style={styles.acess}>Continuar</Text>
          <Icon
            style={styles.iconContainer}
            name="arrowright"
            size={28}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={Register}>
          <Text style={styles.register}>Não possui conta? Crie aqui</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  containerLogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  logo: {
    color: COLORS.secondary,
    fontFamily: "black",
    fontSize: 40,
    letterSpacing: -2,
  },
  subTitle: {
    color: COLORS.white,
    fontFamily: "light",
    fontSize: 16,
  },
  container: {
    flex: 1.5,
    alignItems: "center",
    width: "90%",
    gap: 5,
  },
  label: {
    marginRight: "auto",
    marginLeft: 48,
    marginTop: 8, 
    fontFamily: "thin",
    fontSize: 14,
    color: COLORS.white,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
    width: "90%",
    height: 64,
  },
  input: {
    marginTop: 18,
    backgroundColor: "transparent",
    marginBottom: 15,
    color: COLORS.white,
    fontFamily: "light",
    fontSize: 17,
  },
  emailIcon: {
    marginLeft: 10,
  },
  lockedIcon: {
    marginLeft: 15,
    marginBottom: 5,
  },
  acessButton: {
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 5,
    width: "90%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
  },
  acess: {
    marginHorizontal: 64,
    marginLeft: 90,
    fontFamily: "black",
    fontSize: 24,
    color: COLORS.primary,
  },
  register: {
    marginTop: 10,
    fontFamily: "light",
    color: COLORS.white,
    textDecorationLine: "underline",
  },
});

export default Login;
