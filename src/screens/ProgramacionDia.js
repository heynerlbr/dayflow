import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Badge } from "react-native-elements";

const ProgramacionDia = ({ route }) => {
  const navigation = useNavigation();
  const { fecha } = route.params;
  const [programacion, setProgramacion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchProgramacion = async () => {
      try {
        const response = await fetch(
          "https://fdigital.sodeker.com/api/ListarApiProgramaciones/" +
            `${fecha}`
        );

        if (!response.ok) {
          throw new Error("Error al obtener la programación");
        }

        const data = await response.json();
        setProgramacion(data);
      } catch (error) {
        console.error("Error al obtener la programación:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgramacion();
  }, []);

  const handleRegistroPress = () => {
    navigation.navigate("RegistronDia");
  };

  const handleItemPress = (item) => {
    console.log(item);
    if (item && item.cliente) {
    setSelectedItem(item);

    setTimeout(() => {
      
      navigation.navigate("DetalleProgramacion", { programacion: item });
    }, 500);
    }
    // Aquí puedes realizar alguna acción al seleccionar un elemento de la lista
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        selectedItem === item && styles.selectedItemContainer,
      ]}
      onPress={() => handleItemPress(item)}
    >
      <View style={styles.itemDetails}>
        <Text style={styles.clienteText}>{item.cliente}</Text>
        <Badge
          value={`Volumen ${item.volumen}`}
          badgeStyle={styles.badge}
          textStyle={styles.badgeText}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.registroButton}
        onPress={handleRegistroPress}
      >
        <Text style={styles.registroButtonText}>Registrar Programación</Text>
      </TouchableOpacity> */}
      <FlatList
        data={programacion}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  registroButton: {
    backgroundColor: "#009387",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  registroButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  selectedItemContainer: {
    backgroundColor: "#e0f7fa",
    borderWidth: 2,
    borderColor: "#00acc1",
  },
  itemDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clienteText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  badge: {
    backgroundColor: "#009387",
  },
  badgeText: {
    fontSize: 12,
  },
});

export default ProgramacionDia;