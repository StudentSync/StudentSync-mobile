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
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesing from "react-native-vector-icons/AntDesign";
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
            dropdownTextStyles={styles.textDropDown}
            maxHeight= {70}
            arrowicon={<MaterialIcon name="keyboard-arrow-down" size={26} color={"#eff1f3"} />} 
            searchicon={<FontAwesome name="search" size={20} color={"#eff1f3"} />}
            closeicon={<AntDesing name="close" size={22} color={"#eff1f3"}  />}
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            placeholderTextColor="#aaa"
            placeholder="clique para selecionar" 
            searchPlaceholder="Procure o grau"
            >
          </SelectList>

          <TouchableOpacity style={styles.acessButton} >
            <Text style={styles.acess}>Continuar</Text>
            <Icon
              style={styles.iconContainer}
              name="arrowright"
              size={28}
              color="#fff"
            />
          </TouchableOpacity>

        </View>
      
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};
export default RegisterTeacher;
