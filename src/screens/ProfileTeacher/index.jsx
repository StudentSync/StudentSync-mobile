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
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../contexts/AuthContext";

const ProfileTeacher = () => {
  const navigation = useNavigation();

  const { user } = useContext(AuthContext);

  const configuration = () => {
    navigation.navigate("Configuration");
  };

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
          <TouchableOpacity onPress={configuration}>
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
            <Text style={styles.nameUser}>{user.name}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.officeContainer}>
            <View style={styles.officeCard}>
              <Text style={styles.officeUser}>Docente</Text>
            </View>
          </View>

          <View style={styles.degreeContainer}>
            <View style={styles.degreeCard}>
              <Text style={styles.semesterText}> {user.academic_degree}</Text>
            </View>
          </View>

          <View style={styles.statusContainer}>
            <View style={styles.statusCard}>
              <Text style={styles.statusText}>
                {user.description}
              </Text>
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
                  placeholderTextColor="#aaa"
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
export default ProfileTeacher;