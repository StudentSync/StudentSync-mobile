import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Fontisto";
import Icon4 from "react-native-vector-icons/FontAwesome5";
import Checkbox from "expo-checkbox";

const Register = () => {
  const navigation = useNavigation();

  const login = () => {
    navigation.navigate("Login");
  };

  const [isChecked, setChecked] = useState(false);

  return (
    <LinearGradient
      colors={["#0DAB76", "#223843"]}
      locations={[0.3, 0.9]}
      style={styles.gradient}
    >
      <KeyboardAvoidingView style={styles.main}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subTitle}>
            Digite suas credenciais para criar sua conta
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>NOME</Text>
          <View style={styles.viewInput}>
            <Icon4
              style={styles.userIcon}
              name="user-circle"
              size={28}
              color="#fff"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#aaa"
              placeholder="John Doe"
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>

          <Text style={styles.label}>EMAIL</Text>
          <View style={styles.viewInput}>
            <Icon2
              style={styles.emailIcon}
              name="email-outline"
              size={28}
              color="#fff"
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
              color="#fff"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#aaa"
              placeholder="senha1234"
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>

          <View style={styles.section}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#0DAB76" : undefined}
              />
            </View>
            <Text style={styles.paragraph}>
              Concordo com os Termos de Privacidade
            </Text>
          </View>

          <TouchableOpacity style={styles.acessButton}>
            <Text style={styles.acess}>Continuar</Text>
            <Icon
              style={styles.iconContainer}
              name="arrowright"
              size={28}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={login}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    flex: 3.2,
    alignItems: "center",
    width: "90%",
    gap: 5,
  },
  containerTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  title: {
    color: "#223843",
    fontFamily: "black",
    fontSize: 40,
    letterSpacing: -2,
  },
  subTitle: {
    color: "#fff",
    fontFamily: "light",
    fontSize: 16,
  },
  label: {
    marginRight: "auto",
    marginLeft: 48,
    marginTop: 8,
    fontFamily: "thin",
    fontSize: 14,
    color: "#fff",
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    width: "90%",
    height: 64,
  },
  input: {
    marginTop: 18,
    backgroundColor: "transparent",
    marginBottom: 15,
    color: "#fff",
    fontFamily: "light",
    fontSize: 17,
  },
  emailIcon: {
    marginLeft: 10,
  },
  userIcon: {
    marginLeft: 10,
  },
  lockedIcon: {
    marginLeft: 15,
    marginBottom: 5,
  },
  section: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 52,
  },
  checkbox: {
    borderColor: "#fff",
    backgroundColor: "#fff",
    marginBottom: 2,
  },
  paragraph: {
    fontFamily: "light",
    fontSize: 12,
    color: "#fff",
  },
  acessButton: {
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 5,
    width: "90%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#223843",
    borderRadius: 20,
  },
  acess: {
    marginHorizontal: 64,
    marginLeft: 90,
    fontFamily: "black",
    fontSize: 24,
    color: "#fff",
  },
  loginButton: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 36,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 48,
  },
  login: {
    fontFamily: "medium",
    fontSize: 16,
    color: "#fff",
  },
});
//#0DAB76
//#223843

export default Register;
