import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import {clasificar} from '../utils/api'

const Traducir = {
    'P+' : "Muy Positivo",
    'P'  : "Positivo",
    'NEU'  : "Neutral",
    'N'  : "Negativo",
    'N+'  : "Muy Negativo" ,
    'NONE':"No reconocible",

};

const CenteredInputButton = () => {
  const [text, setText] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSend = async () => {
    try {
      const data = await clasificar(text);
      setGreeting(data); // Ajusta esto según la estructura de tu respuesta
    } catch (error) {
      console.error('Error al clasificar el mensaje:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analisis de Sentimientos</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el comentario"
        value={text}
        onChangeText={setText}
      />
      <Button title="Analizar" onPress={handleSend} />
      {greeting ? (
        <Text style={styles.result}>{Traducir[greeting]}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default CenteredInputButton;
