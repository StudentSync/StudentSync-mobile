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
import { styles }  from "./style";
import { COLORS } from "../../utils/Colors";


const Group = () => {

  
 
  return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>

          <View style={styles.containerNavigation}>

            <View style={styles.containerNavigation}>
              <Icon
                  name="addusergroup"
                  size={24}
                  color={COLORS.primary}
                  style={styles.iconGroup}
                />
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Turmas</Text>
            </View>
            <View style={styles.positionAddIcon}>
                <Icon2
                    name = "add-circle-outline"
                    size={40}
                    color={COLORS.redTwo}
                    style={styles.iconGroup}
                />
            </View>

          </View>

          <View style={styles.containerGroup}>

            <View>
                    
                <Text style={styles.nameGroup}> Isso </Text>
                <View style={styles.cardGroup}>
                    <Text style={styles.textGroup}>
                        Isso
                    </Text>
                </View>

            </View>
            
          </View>
          
        </View>
      </KeyboardAvoidingView>
  );
};
export default Group;