import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { styles }  from "./style";
import { COLORS } from "../../utils/Colors";

const Notifications = () => {
 
    return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
      
          <Icon
              name="user"
              size={35}
              color={COLORS.white}
              style={styles.photoUser}
            />

          <View style={styles.containerNavigation}>
            <View>
              <Icon2
                  name="notifications-outline"
                  size={24}
                  color={COLORS.white}
                  style={styles.iconNotification}
                />
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Notificações</Text>
            </View>
          </View>
       
        </View>
      </KeyboardAvoidingView>
  );
};
export default Notifications;