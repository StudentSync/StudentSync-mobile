import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { styles } from "./style";
import React, { useState } from "react";
import { COLORS } from "../../utils/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Entypo";
import HomeCards from "../../components/homeCards";
import { ModalHome } from "../../components/modalHome";

const Home = () => {
  const [newCardVisible, setNewCardVisible] = useState(false);

  const [eventsData, setEventsData] = useState([
    {
      id: "1",
      startTime: "8h00",
      endTime: "9h00",
      title: "Dedo quebrado",
      room: "Sala A",
      organizer: "Matheus Gois",
    },
    {
      id: "2",
      startTime: "10h30",
      endTime: "11h30",
      title: "Meu prefeito",
      room: "Sala B",
      organizer: "Hivna Castor",
    },
    {
      id: "3",
      startTime: "13h00",
      endTime: "14h30",
      title: "Almoço de Equipe",
      room: "RU",
      organizer: "Jurimetria e Ads",
    },
    {
      id: "4",
      startTime: "15h15",
      endTime: "16h00",
      title: "Monster",
      room: "Sala de Reuniões 2",
      organizer: "Canibal",
    },
    {
      id: "5",
      startTime: "17h45",
      endTime: "18h30",
      title: "Semana puxada",
      room: "Sala de Treinamento",
      organizer: "Matheus dnv",
    },
  ]);

  const [newCardData, setNewCardData] = useState({
    title: "",
    room: "",
    organizer: "",
  });

function openModal() {
  setNewCardVisible(true);
}
function closeModal() {
  setNewCardVisible(false);
}

  function addNewCard() {
    setEventsData((prevData) => [
      ...prevData,
      {
        id: String(prevData.length + 1),
        startTime: "null",
        endTime: "null",
        title: newCardData.title,
        room: newCardData.room,
        organizer: newCardData.organizer,
      },
    ]);
    setNewCardData({
      title: "",
      room: "",
      organizer: "",
    });
    setNewCardVisible(false);
  }

  return (
    <View style={styles.main}>
      <KeyboardAvoidingView style={styles.header}>
        <TouchableOpacity style={styles.add} onPress={openModal}>
          <Icon
            style={styles.addIcon}
            name="add-circle-outline"
            size={48}
            color={COLORS.redTwo}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <Modal visible={newCardVisible} animationType="fade" transparent={true}>
        <ModalHome newCardData={newCardData}
          setNewCardData={setNewCardData}
          addNewCard={addNewCard}
          closeModal={closeModal}
          setNewCardVisible={setNewCardVisible}/>
      </Modal>

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
