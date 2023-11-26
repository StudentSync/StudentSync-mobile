  import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  import { styles } from "./style";
  import React from "react";
  import { COLORS } from "../../utils/Colors";
  import Icon from "react-native-vector-icons/MaterialIcons";
  import Icon2 from "react-native-vector-icons/Entypo";
  import HomeCards from "../../components/homeCards";

  const Home = () => {
    const eventsData = [
      { id: '1', startTime: '8h00', endTime: '9h00', title: 'Reunião de Planejamento', room: 'Sala A', organizer: 'João Silva' },
      { id: '2', startTime: '10h30', endTime: '11h30', title: 'Apresentação de Projeto', room: 'Sala B', organizer: 'Maria Oliveira' },
      { id: '3', startTime: '13h00', endTime: '14h30', title: 'Almoço de Equipe', room: 'Restaurante', organizer: 'Equipe de Desenvolvimento' },
      { id: '4', startTime: '15h15', endTime: '16h00', title: 'Entrevista de Candidato', room: 'Sala de Reuniões 2', organizer: 'Recursos Humanos' },
      { id: '5', startTime: '17h45', endTime: '18h30', title: 'Treinamento de Novos Recursos', room: 'Sala de Treinamento', organizer: 'Ana Santos' },
    ];
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
          <FlatList
          style={styles.viewCards}
          data={eventsData}
          renderItem={({ item }) => <HomeCards event={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
        </KeyboardAvoidingView>
      </View>
    );
  };

  export default Home;
