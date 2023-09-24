import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Avatar } from "react-native-elements";

const PerfilScreen = ({ route }) => {
  const { userProfile } = route.params;

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Card.Title style={styles.title}>Perfil de Usuario</Card.Title>
          <Card.Divider />
          <View style={styles.avatarContainer}>
            <Avatar
              rounded
              source={require("../images/acecard.png")} // Reemplaza la ruta con la ubicación de tu imagen de avatar
              size={120}
              containerStyle={styles.avatar}
            />
          </View>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.text}>{userProfile.name}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{userProfile.email}</Text>
          {/* Agregar más información del perfil de usuario */}
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  cardContainer: {
    borderRadius: 10,
    elevation: 3,
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PerfilScreen