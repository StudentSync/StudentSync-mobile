import { View, Text, KeyboardAvoidingView } from "react-native";
import { styles } from "./style";
import React from "react";

const Home = () => {
  return (
    <View style={styles.main}>
      <KeyboardAvoidingView>
        <Text>oioi</Text>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView style={styles.scheduleContainer}>
        <View style={styles.viewText}>
          <Text style={styles.scheduleText}>Agenda</Text>
        </View>

        <KeyboardAvoidingView style={styles.viewCards}>
          <View style={styles.card}>
            <View style={styles.time}>
              <Text style={styles.startTime}>8h00</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.time}>
              <Text style={styles.startTime}>8h00</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.time}>
              <Text style={styles.startTime}>8h00</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;
