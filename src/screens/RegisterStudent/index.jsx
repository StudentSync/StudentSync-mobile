import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesing from "react-native-vector-icons/AntDesign";
import { styles } from "./style";
import { COLORS } from "../../utils/Colors";

const RegisterStudent = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const name = route.params?.name || "";

  const data = [
    { key: "1", value: "Mestrado" },
    { key: "2", value: "Doutorado" },
    { key: "3", value: "Pós-doutorado" },
  ];

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]}
      locations={[0.3, 0.9]}
      style={styles.gradient}
    >
      <KeyboardAvoidingView style={styles.main}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Eai {name}!</Text>
          <Text style={styles.subtitle}>
            Adicione mais informações para continuar.
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>QUAL SEU CURSO?</Text>
          <SelectList
            boxStyles={styles.labelSelect}
            inputStyles={styles.textSelect}
            dropdownStyles={styles.dropDown}
            dropdownTextStyles={styles.textDropDown}
            maxHeight={70}
            arrowicon={
              <MaterialIcon
                name="keyboard-arrow-down"
                size={26}
                color={COLORS.white}
              />
            }
            searchicon={
              <FontAwesome name="search" size={20} color={COLORS.white} />
            }
            closeicon={
              <AntDesing name="close" size={22} color={COLORS.white} />
            }
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            placeholderTextColor="#aaa"
            placeholder="clique para selecionar"
            searchPlaceholder="Procure o grau"
          ></SelectList>

          <Text style={styles.label}>SELECIONE O SEMESTRE</Text>
          <SelectList
            boxStyles={styles.labelSelect}
            inputStyles={styles.textSelect}
            dropdownStyles={styles.dropDown}
            dropdownTextStyles={styles.textDropDown}
            maxHeight={70}
            arrowicon={
              <MaterialIcon
                name="keyboard-arrow-down"
                size={26}
                color={COLORS.white}
              />
            }
            searchicon={
              <FontAwesome name="search" size={20} color={COLORS.secondary} />
            }
            closeicon={
              <AntDesing name="close" size={22} color={COLORS.secondary} />
            }
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            placeholderTextColor="#aaa"
            placeholder="clique para selecionar"
            searchPlaceholder="Procure o grau"
          ></SelectList>

          <TouchableOpacity style={styles.acessButton}>
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
  );
};
export default RegisterStudent;
