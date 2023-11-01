import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../utils/Colors";
import Icons from "react-native-vector-icons/FontAwesome5";

const Office = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const name = route.params?.name || '';

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]}
      locations={[0.3, 0.9]}
      style={styles.gradient}
    >
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Text style={styles.title}>Olá {name}!</Text>
          <Text style={styles.subTitle}>Selecione um para continuar</Text>
          <Text style={styles.textSelection}>Você é:</Text>
        </View>

        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem}>
          <Icons
              style={styles.emailIcon}
              name="user-graduate"
              size={86}
              color={COLORS.white}
            />
            <Text style={styles.navText}>Estudante</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
          <Icons
              style={styles.emailIcon}
              name="user-tie"
              size={86}
              color={COLORS.white}
            />
            <Text style={styles.navText}>Docente</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Office;
