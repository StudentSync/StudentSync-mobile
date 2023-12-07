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

class ListNode {
  constructor(group) {
    this.group = group;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(group) {
    const newNode = new ListNode(group);
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
      result.push(current.group);
      current = current.next;
    }
    return result;
  }
}

const Group = () => {
  const groupList = new LinkedList();
  groupList.append({ id: 1, title: "Group 1", participants: "Gabriel, Jane" });
  groupList.append({ id: 2, title: "Group 2", participants: "Alice, Bob" });
  groupList.append({ id: 3, title: "Group 3", participants: "Charlie, David" });
  groupList.append({ id: 4, title: "Group 3", participants: "Charlie, David" });
  groupList.append({ id: 5, title: "Group 3", participants: "Charlie, David" });

  const renderGroupCard = (group) => (
    <View key={group.id} style={styles.cardGroup}>
      <Text style={styles.titleGroup}>{group.title}</Text>
      <Text style={styles.textGroup}>{group.participants}</Text>
    </View>
  );

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

      <View style={styles.containerGroup}>
        {groupList.iterator().map(renderGroupCard)}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Group;
