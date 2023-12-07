import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";

import { styles } from "./style";

import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../utils/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Initial = () => {
  const navigation = useNavigation();
  const { verifyToken } = useContext(AuthContext)
  const login = () => {
    navigation.navigate("Login");
  };

  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      locations={[0.5, 0.9]}
      style={styles.gradient}
    >
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Text style={styles.logo}>StudentSync</Text>
          <Text style={styles.subTitle}>Organização de compromissos</Text>
          <TouchableOpacity style={styles.button} onPress={verifyToken}>
            <Text style={styles.textButton}>Iniciar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Initial;
