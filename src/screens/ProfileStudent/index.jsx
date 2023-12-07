import React, { useContext } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import { COLORS } from "../../utils/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../contexts/AuthContext";

const ProfileStudent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = useContext(AuthContext)

  const Configuration = () => {
    navigation.navigate("Configuration");
  };

  const name = "Gois"
  const selectedCourse = route.params?.selectedCourse || null;
  const selectedSemester = route.params?.selectedSemester || null;

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.containerNavigation}>
          <View>
            <Icon
              style={styles.iconsNavigation}
              name="arrowleft"
              size={25}
              color={COLORS.primary}
            />
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Perfil</Text>
          </View>
          <TouchableOpacity onPress={Configuration}>
            <Icon2
              style={styles.iconsNavigation}
              name="settings-sharp"
              size={25}
              color={COLORS.primary}
            />
          </TouchableOpacity>

        </View>

        <View style={styles.containerUser}>
          <View>
            <Icon
              name="user"
              size={70}
              color={COLORS.primary}
              style={styles.photoUser}
            />
          </View>
          <View>
            <Text style={styles.nameUser}> {user.name} </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.officeContainer}>
            <View style={styles.officeCard}>
              <Text style={styles.officeUser}>Discente</Text>
            </View>
          </View>

          <View style={styles.courseContainer}>
            <View style={styles.courseCard}>
              <Text style={styles.courseText}>
                {user.course}
              </Text>
            </View>
          </View>

          <View style={styles.semesterContainer}>
            <View style={styles.semesterCard}>
              <Text style={styles.semesterText}> {user.semester}</Text>
            </View>
          </View>

          <View style={styles.disponibilityContainer}>
            <View style={styles.disponibilityCard}>
              <View style={styles.label}>
                <Text style={styles.textLabel}>HORÁRIOS DISPONIVEIS</Text>
              </View>

              <View style={styles.viewInput}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor={COLORS.secondary}
                  placeholder="Segunda, de 10h às 11h30"
                  autoCorrect={false}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default ProfileStudent;