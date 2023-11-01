import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Keyboard,
  TextInput,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";

const RegisterTeacher = () => {
  
  const [selected, setSelected] = useState([]);

  const data = [
   {key: "1", value: "Mestrado"},
   {key: "2", value: "Doutorado"},
   {key: "3", value: "Pós-doutorado"},
  ];

  return (
    <LinearGradient
      colors={["#0DAB76", "#223843"]}
      locations={[0.3, 0.9]}
      style={styles.gradient}
    >
      <KeyboardAvoidingView style={styles.main}>

        <View style={styles.containerTitle}>
          <Text style ={styles.title}>Bem vindo, Italo!</Text>
          <Text style = {styles.subtitle}>Adicione mais informações para continuar.</Text>
        </View>

        <View style={styles.container}>

          <Text style={styles.labelAbout}>Conte sobre sua titulação</Text>
          <View style={styles.viewInputAbout}>
            <TextInput
              style={styles.inputAbout}
              placeholderTextColor="#aaa"
              placeholder="Adicione uma descrição de suas titulações"
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>

          <Text style={styles.label}>GRAU ACADÊMICO</Text>
            <SelectList
              boxStyles={styles.labelSelect}
              inputStyles={styles.textSelect}
              dropdownStyles={styles.dropDown}
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              placeholderTextColor="#aaa"
              placeholder="clique para selecionar" 
              searchPlaceholder="Procure o grau"
              >
            </SelectList>
          </View>

      
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
export default RegisterTeacher;
