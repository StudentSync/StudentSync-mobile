import React from "react";
import { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { styles }  from "./style";
import { COLORS } from "../../utils/Colors";


const Notifications = () => {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      organizer: "Organizador 1",
      projectName: "Projeto 1",
      isVisible: true,
    },
    {
      id: 2,
      organizer: "Organizador 2",
      projectName: "Projeto 2",
      isVisible: true,
    },
    {
      id: 3,
      organizer: "Organizador 3",
      projectName: "Projeto 3",
      isVisible: true,
    },
  ]);

  const reject = (notificationId) => {
    setNotifications((prevNotifications) => {
      return prevNotifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, isVisible: false }
          : notification
      );
    });
  };

  const accept = () => {};
 
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

          <View style={styles.containerNotification}>

            {notifications.map((notification) =>
              notification.isVisible ? (
                <LinearGradient
                  key={notification.id}
                  colors={[COLORS.secondary, COLORS.primary]}
                  locations={[0.3, 0.9]}
                  style={styles.cardNotification}
                >
                  <View>
                    <Text style={styles.nameOrganizer}>{notification.organizer}</Text>
                    <View style={styles.containerInvitation}>
                      <Text style={styles.textNotification}>
                        Convidou você para participar do projeto {notification.projectName}
                      </Text>
                    </View>

                    <View style={styles.containerAnswer}>
                      <TouchableOpacity style={styles.button} onPress={() => reject(notification.id)}>
                        <Text style={styles.textReject}>Rejeitar</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={accept}>
                        <Text style={styles.textAccept}>Aceitar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </LinearGradient>
              ) : null
            )}
            

          </View>
          

        </View>
      </KeyboardAvoidingView>
  );
};
export default Notifications;