import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Office = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Text style={styles.logo}>Qual seu cargo?</Text>
        <Text style={styles.subTitle}>Escolha um para continuar</Text>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={directorPage}>
          
          <Text style={styles.navText}>Diretor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={coordinatorPage}>
          
          <Text style={styles.navText}>Coordenador</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={secretaryPage}>
          
          <Text style={styles.navText}>Secretário Acadêmico</Text>
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
    backgroundColor: "rgba(22,38,43,1)",
  },
  containerLogo: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 36,
  },
  logo: {
    color: "#0DAB76",
    fontFamily: "Montserrat_700Bold",
    fontSize: 36,
  },
  subTitle: {
    color: "#fff",
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
  },
  navBar: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    padding: 36,
  },
  navImg: {
    width: 50,
    height: 50,
    tintColor: "white",
  },
  navText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 18,
    color: "#0DAB76",
    marginTop: 10,
    marginBottom: 24,
  },
});

export default Office;
