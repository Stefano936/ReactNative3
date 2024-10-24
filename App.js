import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  
  const handleAdd = (e) => {
    setTasks([...tasks, { text: taskName }]);
    setTaskName("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar tareas</Text>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputContainer__input} placeholder="Escribe una tarea" onChangeText={text => setTaskName(text)} value={taskName} />
        <Button style={styles.inputContainer__button} title="Agregar" onPress={handleAdd} />
      </View>

      <View style={styles.showcase}>
        <Text style={styles.showcase__title}>Tareas Creadas</Text>
        <FlatList style={styles.showcase__list} data={tasks} renderItem={({ item }) => <Text>{item.text}</Text>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
  },

  inputContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputContainer__input: {
    width: "70%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
  },

  showcase: {
    width: "80%",
    marginTop: 30,
  },

  showcase__title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },

  showcase__list: {
    width: "100%",
  },
});