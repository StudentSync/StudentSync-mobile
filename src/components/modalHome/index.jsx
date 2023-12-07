import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { COLORS } from "../../utils/Colors";
import { styles } from "./style";

import Icon from "react-native-vector-icons/MaterialIcons";

export function ModalHome({
  setNewCardData,
  addNewCard,
  closeModal,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Adicione seu compromisso</Text>
        </View>
        <View style={styles.viewInputs}>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#000"
              placeholder="Título"
              autoCorrect={false}
              onChangeText={(text) =>
                setNewCardData((prevData) => ({ ...prevData, title: text }))
              }
            />
          </View>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#000"
              placeholder="Sala"
              autoCorrect={false}
              onChangeText={(text) =>
                setNewCardData((prevData) => ({ ...prevData, room: text }))
              }
            />
          </View>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#000"
              placeholder="Grupo"
              autoCorrect={false}
              onChangeText={(text) =>
                setNewCardData((prevData) => ({
                  ...prevData,
                  organizer: text,
                }))
              }
            />
          </View>
        </View>
        <TouchableOpacity style={styles.add} onPress={addNewCard}>
          <Icon
            style={styles.addIcon}
            name="add-circle-outline"
            size={48}
            color={COLORS.redTwo}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.close} onPress={closeModal}>
          <Text> CLOSE </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
