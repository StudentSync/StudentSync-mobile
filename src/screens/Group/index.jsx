import React from "react";
import { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import { styles } from "./style";
import { COLORS } from "../../utils/Colors";

const Group = () => {

  const data = [
    { id: 1, title: "Group 1", participants: "John, Jane" },
    { id: 2, title: "Group 2", participants: "Alice, Bob" },
    { id: 3, title: "Group 3", participants: "Charlie, David" },
    { id: 4, title: "Group 3", participants: "Charlie, David" },
    { id: 5, title: "Group 3", participants: "Charlie, David" },
  ];

  return (
    <KeyboardAvoidingView style={styles.background}>
      
      <View style={styles.containerNavigation}>

        <TouchableOpacity>
          <Icon
            name="addusergroup"
            size={24}
            color={COLORS.primary}
            style={styles.iconGroup}
          />
        </TouchableOpacity>
        
          <Text style={styles.title}>Turmas</Text>
        
        <View>
          <Icon2
            name="add-circle-outline"
            size={40}
            color={COLORS.redTwo}
            style={styles.iconGroup}
          />
        </View>

      </View>

      
      <View  style={styles.containerGroup}>
        {data.map((group) => (
            <View key={group.id} style={styles.cardGroup}>
              <Text style={styles.titleGroup}>{group.title}</Text>
              <Text style={styles.textGroup}>{group.participants}</Text>
            </View>
        ))}
      </View>

    </KeyboardAvoidingView>
  );
};
export default Group;