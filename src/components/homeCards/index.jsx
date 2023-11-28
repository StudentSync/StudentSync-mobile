import React from "react";
import { Text, View, ScrollView } from "react-native";
import { styles } from "./style";

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
          <View>
          <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.information}>
            <Text style={styles.room}>{room}</Text>
            <Text style={styles.organizer}>{organizer}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeCards;
