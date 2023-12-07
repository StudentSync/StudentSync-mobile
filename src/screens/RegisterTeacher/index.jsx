import React, { useState, useContext } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../utils/Colors";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesing from "react-native-vector-icons/AntDesign";
import { styles } from "./style";
import { AuthContext } from "../../contexts/AuthContext";
import { RegisterContext } from "../../contexts/RegisterContext";


const RegisterTeacher = () => {

  const { email, name, password } = useContext(RegisterContext);
  const { registerTeacher } = useContext(AuthContext);

  const partsName = name.split(" ");
  const firstName = partsName.length > 0 ? partsName[0] : ""


  const [selectedDegree, setSelectedDegree] = useState(null);

  const data = [
    { key: "1", value: "Mestrado" },
    { key: "2", value: "Doutorado" },
  ];

  const [about, setAbout] = useState("");

  const updateAbout = (text) => {
    setAbout(text);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        locations={[0.3, 0.9]}
        style={styles.gradient}
      >
        <KeyboardAvoidingView style={styles.main}>

          <View style={styles.containerTitle}>
            <Text style={styles.title}>Olá, Prof {firstName}</Text>
            <Text style={styles.subtitle}>Adicione mais informações para continuar.</Text>
          </View>

          <View style={styles.container}>

            <Text style={styles.labelAbout}>Conte-nos sobre sua titulação</Text>
            <View style={styles.viewInputAbout}>
              <TextInput
                style={styles.inputAbout}
                placeholderTextColor="#aaa"
                placeholder="Adicione uma descrição de suas titulações"
                autoCorrect={false}
                value={about}
                onChangeText={updateAbout}
              />
            </View>

            <Text style={styles.label}>GRAU ACADÊMICO</Text>
            <SelectList
              boxStyles={styles.labelSelect}
              inputStyles={styles.textSelect}
              dropdownStyles={styles.dropDown}
              dropdownTextStyles={styles.textDropDown}
              maxHeight={70}
              arrowicon={<MaterialIcon name="keyboard-arrow-down" size={26} color={COLORS.secondary} />}
              searchicon={<FontAwesome name="search" size={20} color={COLORS.secondary} />}
              closeicon={<AntDesing name="close" size={22} color={COLORS.secondary} />}
              setSelected={(val) => setSelectedDegree(val)}
              data={data}
              save="value"
              placeholderTextColor="#aaa"
              placeholder="clique para selecionar"
              searchPlaceholder="Procure o grau"
            >
            </SelectList>

            <TouchableOpacity style={styles.acessButton} onPress={() => {
              registerTeacher({ email: email, password: password, name: name, academic_degree: selectedDegree, description: about })
            }}>
              <Text style={styles.acess}>Continuar</Text>
              <Icon
                style={styles.iconContainer}
                name="arrowright"
                size={28}
                color={COLORS.white}
              />
            </TouchableOpacity>

          </View>

        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
export default RegisterTeacher;
