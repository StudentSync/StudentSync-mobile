import React from 'react';
import { View, KeyboardAvoidingView, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons"
import Icon3 from 'react-native-vector-icons/Feather'

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

                <View style={styles.officeContainer}>
                  <View style={styles.officeCard}>
                    <Text style={styles.officeUser}>Discente</Text>
                  </View>
                </View>

                <View style={styles.courseContainer}>
                  <View style={styles.courseCard}>
                    <Text style={styles.courseText}>Análise e Desenvolvimento de Sistemas</Text>
                  </View>
                </View>

                <View style={styles.semesterContainer}>
                  <View style={styles.semesterCard}>
                    <Text style={styles.semesterText}>2º semestre</Text>
                  </View>
                </View>

                <View style = {styles.disponibilityContainer}>
                  <View style={styles.disponibilityCard}>
                    <View style={styles.label}>
                      <Icon3 
                        style={styles.iconLabel}
                        name="edit-2" size={20} color="#223843" 
                      />
                      <Text style={styles.textLabel}>HORÁRIOS DISPONIVEIS</Text>
                    </View>
                    
                    <View style={styles.viewInput}>  
                      <TextInput
                        style={styles.input}
                        placeholderTextColor="#0dab76"
                        placeholder="Segunda, de 10h às 11h30"
                        autoCorrect={false}
                      />
                    </View>
                    
                  </View>
                </View>

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
        marginBottom:45,
    },
    card:{
      flex:4.5,
      backgroundColor:"#223843",
      width: "112%",
      height: "100%",
      alignItems: "center",
      justifyContent:"center",
      borderRadius: 42,
    },
    officeContainer: {
      flex: 1,
      justifyContent: "flex-start",
      marginTop: 25,
      width:"30%"
    },
    officeCard: {
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "#f71735",
      borderRadius: 30,
      width: "100%",
      height: "35%"
    },
    officeUser: {
      color: "#eff1f3",
      fontFamily: "medium",
      fontSize: 20,
    },
    courseContainer:{
      flex: 1,
      justifyContent: "flex-start",
    },
    courseCard: {
      flex: 1,
      justifyContent: "flex-start",
      width: "70%",
    },
    courseText: {
      color: "#eff1f3",
      fontFamily: "medium",
      fontSize: 18,
      textAlign: "center",
    },
    semesterContainer:{
      flex: 1,
      justifyContent: "flex-start",
      width: "33%"
    },
    semesterCard: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0dab76",
      borderRadius: 30,
      width: "100%",
      height: "38%"
    },
    semesterText: {
      color: "#eff1f3",
      fontFamily: "medium",
      fontSize: 18,
      textAlign: "center",
    },
    disponibilityContainer: {
      flex:4,
      justifyContent: "flex-start",
      alignItems: "center",
      width: "90%",
      height: "20%",
    },
    disponibilityCard: {
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#eff1f3",
      borderRadius: 30,
      width: "85%",
      height: "50%",
    },
    label: {
      flex: 0.6,
      alignItems: "flex-start",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      width: "100%",
      height:"20%",
    },
    textLabel: {
      marginRight: 70,
      marginTop: 10, 
      fontFamily: "light",
      fontSize: 14,
      color: "#223843",
    },
    iconLabel:{
      marginRight: "auto",
      marginLeft: 20,
      marginTop: 5,
    },
    input: {
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
      color: "#223843",
      fontFamily: "light",
      fontSize: 17,
    },
  });