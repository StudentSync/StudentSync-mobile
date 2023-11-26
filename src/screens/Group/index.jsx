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
import { styles } from "./style";
import { COLORS } from "../../utils/Colors";

const Group = () => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.containerNavigation}>
          <View>
            <Icon
              name="addusergroup"
              size={24}
              color={COLORS.white}
              style={styles.iconGroup}
            />
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Turmas</Text>
          </View>
          <View>
            <Icon2
              name="add-circle-outline"
              size={24}
              color={COLORS.redTwo}
              style={styles.iconGroup}
            />
          </View>
        </View>

        <View style={styles.containerGroup}>
          <LinearGradient
            colors={[COLORS.secondary, COLORS.primary]}
            locations={[0.3, 0.9]}
            style={styles.cardGroup}
          >
            <View>
              <Text style={styles.nameGroup}> Isso </Text>
              <View style={styles.containerGroup}>
                <Text style={styles.textGroup}>Isso</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Group;
