import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import Icon  from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../../utils/Colors";

const HomeCards = ({ event }) => {
  const { startTime, endTime, title, room, organizer } = event;

  return (
    <View style={styles.card}>
      <View style={styles.time}>
        <Text style={styles.startTime}>{startTime}</Text>
        <Text style={styles.endTime}>{endTime}</Text>
      </View>
      <View style={styles.titleCard}>
        <ScrollView
          contentContainerStyle={styles.scrollTitleCard}
          vertical
          showsVerticalScrollIndicator={false}
        >
        <View style={styles.informationCard}>
          
          <View style={styles.information}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.room}>{room}</Text>
            <Text style={styles.organizer}>{organizer}</Text>
            <Text style={styles.organizer}>Turma</Text>
          </View>
          
          <TouchableOpacity style={styles.positionIcon}>
          <Icon
              name="trash-alt"
              size={20}
              color= {COLORS.redTwo}
            />
          </TouchableOpacity>

        </View>

        </ScrollView>
      </View>
    </View>
  );
};

export default HomeCards;
