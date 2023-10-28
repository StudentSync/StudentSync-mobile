import React from 'react';
import { View, KeyboardAvoidingView, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons"

function Profile() {


  return (
    <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
            
            <View style={styles.containerNavigation}> 
                <View>
                    <Icon style={styles.iconsNavigation}
                     name="arrowleft" size={25} color="#223843"/>
                </View>
                <View style={styles.containerTitle}><
                    Text style ={styles.title}>Perfil</Text>
                </View>
                <View>
                    <Icon2 style={styles.iconsNavigation}
                    name="settings-sharp" size={25} color="#223843" />
                </View>
            </View>
            
            <View style={styles.containerUser}>
                <View>
                    <Icon name= "user" size={70} color="#223843" style={styles.photoUser}/>
                </View>
                <View>
                    <Text style ={styles.nameUser}>Hivna Castro</Text>
                </View>
            </View>

            <View style={styles.card}>

            </View>

        </View>
          

    </KeyboardAvoidingView>
  )
}
export default Profile;

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#eff1f3",
    },
    container: {
      flex: 1.5,
      alignItems: "center",
      width: "90%",
      gap: 5,
    },
    containerNavigation:{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 32,
    },
    containerTitle: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 32,
    },
    title: {
      color: "#223843",
      fontFamily: "ligth",
      fontSize: 20,
      letterSpacing: 0,
    },
    iconsNavigation:{
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 25,
    },
    containerUser:{
      flex:1.5,
      alignItems:"center",
      justifyContent:"flex-start",
    },
    nameUser: {
        color: "#223843",
        fontFamily: "medium",
        fontSize: 23,
        marginBottom:0,
    },
    photoUser:{
        marginBottom:55,
    },
    card:{
      flex:4.5,
      backgroundColor:"#223843",
      width: "112%",
      height: "150%",
      alignItems: "center",
      justifyContent:"center",
      borderRadius: 42,
    }
  });