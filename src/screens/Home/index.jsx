import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import React from "react";
import { COLORS } from "../../utils/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Entypo"

const Home = () => {
  return (
    <View style={styles.main}>
      <KeyboardAvoidingView style={styles.header}>
        <TouchableOpacity style={styles.add}>
          <Icon
            style={styles.addIcon}
            name="add-circle-outline"
            size={48}
            color={COLORS.redTwo}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={styles.monthView}>
      <Icon2
            style={styles.addIcon}
            name="calendar"
            size={36}
            color={COLORS.white}
          />
        <Text style={styles.month}>November</Text>
      </View>

      <KeyboardAvoidingView style={styles.scheduleContainer}>
        <View style={styles.viewText}>
          <Text style={styles.scheduleText}>Agenda</Text>
        </View>
        <KeyboardAvoidingView style={styles.viewCards}>
          <View style={styles.card}>
            <View style={styles.time}>
              <Text style={styles.startTime}>8h00</Text>
              <Text style={styles.endTime}>8h50</Text>
            </View>
            <View style={styles.titleCard}>
              <Text style={styles.title}>Title</Text>
              <View style={styles.information}>
                <Text style={styles.room}>Room</Text>
                <Text style={styles.organizer}>Organizer</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.time}>
              <Text style={styles.startTime}>8h00</Text>
              <Text style={styles.endTime}>8h50</Text>
            </View>
            <View style={styles.titleCard}>
              <Text style={styles.title}>Title</Text>
              <View style={styles.information}>
                <Text style={styles.room}>Room</Text>
                <Text style={styles.organizer}>Organizer</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.time}>
              <Text style={styles.startTime}>8h00</Text>
              <Text style={styles.endTime}>8h50</Text>
            </View>
            <View style={styles.titleCard}>
              <Text style={styles.title}>Title</Text>
              <View style={styles.information}>
                <Text style={styles.room}>Room</Text>
                <Text style={styles.organizer}>Organizer</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;
