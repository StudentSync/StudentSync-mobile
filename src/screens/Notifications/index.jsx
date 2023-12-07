import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { styles } from "./style";
import { COLORS } from "../../utils/Colors";

class ListNode {
  constructor(notification) {
    this.notification = notification;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(notification) {
    const newNode = new ListNode(notification);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  iterator() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.notification);
      current = current.next;
    }
    return result;
  }
}

const Notifications = () => {
  const [notificationList, setNotificationList] = useState(new LinkedList());

  useEffect(() => {
    const initialNotifications = [
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
    ];

    const list = new LinkedList();
    initialNotifications.forEach((notification) => list.append(notification));
    setNotificationList(list);
  }, []);

  const reject = (notificationId) => {
    setNotificationList((prevList) => {
      const newList = new LinkedList();

      let current = prevList.head;
      while (current) {
        if (current.notification.id === notificationId) {
          current.notification.isVisible = false;
        }

        newList.append(current.notification);
        current = current.next;
      }

      return newList;
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
          {notificationList.iterator().map((notification) =>
            notification.isVisible ? (
              <LinearGradient
                key={notification.id}
                colors={[COLORS.secondary, COLORS.primary]}
                locations={[0.3, 0.9]}
                style={styles.cardNotification}
              >
                <View>
                  <Text style={styles.nameOrganizer}>
                    {notification.organizer}
                  </Text>
                  <View style={styles.containerInvitation}>
                    <Text style={styles.textNotification}>
                      Convidou você para participar do projeto{" "}
                      {notification.projectName}
                    </Text>
                  </View>
                  <View style={styles.containerAnswer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => reject(notification.id)}
                    >
                      <Text style={styles.textReject}>Rejeitar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={accept}
                    >
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
