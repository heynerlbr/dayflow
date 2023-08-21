import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetalleProgramacionScreen = ({ route }) => {
  const { programacion } = route.params;

  if (!programacion) {
    return <Text style={styles.errorText}>No se ha proporcionado información de programación</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>Detalles de Programación</Text>
        </View>

        <View style={styles.cardBody}>
        <Text style={styles.label}>Nombre Asesor:</Text>
          <Text style={styles.value}>{programacion.nomuser}</Text>
          <Text style={styles.label}>Tipo Programacion:</Text>
          <Text style={styles.value}>{programacion.tipoprogramacion}</Text>
          <Text style={styles.label}>Cliente:</Text>
          <Text style={styles.value}>{programacion.cliente}</Text>

          <Text style={styles.label}>Bomba:</Text>
          <Text style={styles.value}>{programacion.bomba}</Text>

          <Text style={styles.label}>Hora de Programación:</Text>
          <Text style={styles.value}>
            {programacion.horaCompleta} {programacion.jornada}
          </Text>

          <Text style={styles.label}>Volumen:</Text>
          <Text style={styles.value}>{programacion.volumen}</Text>

          <Text style={styles.label}>Descripción:</Text>
          <Text style={styles.value}>{programacion.descripcion}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  card: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  cardHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardBody: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 50,
  },
});

export default DetalleProgramacionScreen;