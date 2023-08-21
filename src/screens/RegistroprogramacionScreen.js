import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const RegistroScreen = () => {
  const [asesor, setAsesor] = useState("Nombre del Asesor"); // Aquí puedes establecer el valor del asesor

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Asesor:</Text>
      <TextInput
        style={styles.input}
        value={asesor}
        editable={false} // Deshabilita la edición del campo
      />
      {/* Agrega aquí otros campos que necesites */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});

export default RegistroScreen;