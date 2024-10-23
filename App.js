import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;

    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea('');
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <View>
      <TextInput
        placeholder='Nueva tarea'
        value={nuevaTarea}
        onChangeText={setNuevaTarea}
      />
      <Button onPress={agregarTarea} title="Agregar Tarea" />
      {tareas.map((tarea, index) => (
        <View key={index}>
          <Text>{tarea}</Text>
          <Button onPress={() => eliminarTarea(index)} title="Eliminar" />
        </View>
      ))}
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
});

/*
Crear una lista de tareas donde se pueda añadir y eliminar elementos.
Tareas:
•	Usar un useState para manejar la lista de tareas.
•	Añadir un TextInput para escribir nuevas tareas y un botón para añadirlas.
•	Mostrar las tareas en una lista debajo del campo de entrada.
•	Agregar un botón junto a cada tarea para eliminarla.
*/