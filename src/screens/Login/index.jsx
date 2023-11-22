import React from "react";
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Fontisto";
import { COLORS } from "../../utils/Colors";

const Login = () => {
  const navigation = useNavigation();

  const register = () => {
    navigation.navigate("Register");
  };

  const main = () => {
    navigation.navigate("Main");
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

        <TouchableOpacity style={styles.acessButton} onPress={main}>
          <Text style={styles.acess}>Continuar</Text>
          <Icon
            style={styles.iconContainer}
            name="arrowright"
            size={28}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={register}>
          <Text style={styles.register}>Não possui conta? Crie aqui</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;