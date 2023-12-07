import React, { useState, useContext, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesing from "react-native-vector-icons/AntDesign";
import { styles } from "./style";
import { COLORS } from "../../utils/Colors";
import SSApi from "../../services/SSApi";
import { AuthContext } from "../../contexts/AuthContext";
import { RegisterContext } from "../../contexts/RegisterContext";

const RegisterStudent = () => {

  useEffect(() => {
    getCourses();
  }, [])

  const { registerStudent } = useContext(AuthContext);
  const { email, name, password } = useContext(RegisterContext);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [courses, setCourses] = useState([]);
  const partsName = name.split(" ");
  const firstName = partsName.length > 0 ? partsName[0] : ""

  const getCourses = async () => {
    const response = await SSApi.get('courses');
    const data = response.data.map(course => ({
      key: course.id.toString(),
      value: course.name,
    }));
    setCourses(data);
  }


  const semester = [
    { key: "1", value: "Semestre 1" },
    { key: "2", value: "Semestre 2" },
    { key: "3", value: "Semestre 3" },
    { key: "4", value: "Semestre 4" },
    { key: "5", value: "Semestre 5" },
    { key: "6", value: "Semestre 6" },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        locations={[0.3, 0.9]}
        style={styles.gradient}
      >
        <KeyboardAvoidingView style={styles.main}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>E aí {firstName}!</Text>
            <Text style={styles.subtitle}>
              Adicione mais informações para continuar.
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.label}>QUAL SEU CURSO?</Text>
            <SelectList
              style={styles.selectStyle}
              boxStyles={styles.labelSelect}
              inputStyles={styles.textSelect}
              dropdownStyles={styles.dropDown}
              dropdownTextStyles={styles.textDropDown}
              maxHeight={110}
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
              setSelected={(key) => setSelectedCourse(key)}
              data={courses}
              save="key"
              placeholderTextColor={COLORS.white}
              placeholder="clique para selecionar"
              searchPlaceholder="Procure o grau"
            ></SelectList>

            <Text style={styles.label}>SELECIONE O SEMESTRE</Text>
            <SelectList
              boxStyles={styles.labelSelect}
              inputStyles={styles.textSelect}
              dropdownStyles={styles.dropDown}
              dropdownTextStyles={styles.textDropDown}
              maxHeight={110}
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
              setSelected={(val) => setSelectedSemester(val)}
              data={semester}
              save="value"
              placeholderTextColor={COLORS.white}
              placeholder="clique para selecionar"
              searchPlaceholder="Procure o grau"
            ></SelectList>

            <TouchableOpacity style={styles.acessButton} onPress={() => {
              registerStudent({ email: email, name: name, password: password, course_id: selectedCourse, semester: selectedSemester })
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
export default RegisterStudent;
