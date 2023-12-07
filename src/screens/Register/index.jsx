import React, { useState, useContext } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./style"
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Fontisto";
import Icon4 from "react-native-vector-icons/FontAwesome5";
import Checkbox from "expo-checkbox";
import { COLORS } from "../../utils/Colors";
import { RegisterContext } from "../../contexts/RegisterContext";

const Register = () => {
  const navigation = useNavigation();
  const { handleRegisterParams } = useContext(RegisterContext)
  const login = () => {
    navigation.navigate("Login");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isChecked, setChecked] = useState(false);


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
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
                color={COLORS.white}
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#aaa"
                placeholder="John Doe"
                autoCorrect={false}
                value={name}
                onChangeText={(val) => { setName(val) }}
              />
            </View>

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
                value={email}
                onChangeText={(val) => { setEmail(val) }}
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
                onChangeText={(val) => { setPassword(val) }}
                value={password}
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

            <TouchableOpacity style={styles.acessButton} onPress={() => handleRegisterParams({ name, email, password })}>
              <Text style={styles.acess}>Continuar</Text>
              <Icon
                style={styles.iconContainer}
                name="arrowright"
                size={28}
                color={COLORS.white}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={login}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
export default Register;