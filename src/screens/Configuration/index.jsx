import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { COLORS } from "../../utils/Colors";
import Icon from "react-native-vector-icons/AntDesign";


const Configuration = () => {
    
    const navigation = useNavigation();

    const Login = () => {
      navigation.navigate("Login");
    };

    const Profile = () => {
        navigation.navigate("Profile")
    };

  return (
    <KeyboardAvoidingView style={styles.background}>
      
        <View style={styles.containerNavigation}>
            <TouchableOpacity onPress={Profile}>
                <Icon
                    style={styles.iconsNavigation}
                    name="arrowleft"
                    size={25}
                    color={COLORS.redTwo}
                />
            </TouchableOpacity>
        
            <View style={styles.containerTitle}>
            <Text style={styles.title}>Configurações</Text>
            </View>
        </View>

        <View style={styles.containerUser}>
            <Text style={styles.userName}>Anderson Uchôa</Text>
            <Text style={styles.userEmail}>andersonuchoa@ufc.br</Text>
        </View>

        <View style={styles.container}>
            <Text style={styles.label}>DISPONIBILIDADE</Text>
            <View style={styles.viewInput}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaa"
                    placeholder="Terça e Quinta: 14h - 17h"
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
            </View>
        </View>
        <View style={styles.containerSingOut}>
            <TouchableOpacity style={styles.singOutButton} onPress={Login}> 
            <Text style={styles.singOut}>Sair</Text>
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  );
};

export default Configuration;
