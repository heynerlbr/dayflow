import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Picker,
} from "react-native";
import Autocomplete from 'react-native-autocomplete-input';
import axios from 'axios';

const FormCreateProgramacionSreen = () => {
  const [asesor, setAsesor] = useState("");
  const [tipoProgramacion, setTipoProgramacion] = useState("facturado");
  const [cliente, setCliente] = useState("");
  const [codigoObra, setCodigoObra] = useState("");
  const [productoObra, setProductoObra] = useState("");
  const [bomba, setBomba] = useState("Auto Bomba");
  const [volumen, setVolumen] = useState("");
  const [hora, setHora] = useState("");
  const [tipoFundida, setTipoFundida] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Resultados de búsqueda
 

  useEffect(() => {
    // Esta función manejará la búsqueda a medida que el usuario escribe
    const searchApi = async (text) => {
      try {
        const response = await axios.post('https://fdigital.sodeker.com/api/ApitraerOpcionesClientes', {
          data: JSON.stringify({
            tipoprogramacion: tipoProgramacion, // Usamos el tipo de programación actual
            texto: text, // Usamos el texto actual del campo de búsqueda
          }),
        });

        // Si la solicitud es exitosa, actualiza los resultados de búsqueda
        setSearchResults(response.data);
      } catch (error) {
        // Manejar errores aquí si es necesario.
        console.error(error);
      }
    };

    // Llamar a la función de búsqueda al cargar el componente
    searchApi(cliente);
  }, [cliente, tipoProgramacion]);

  const handleGuardar = () => {
    // Lógica para guardar el formulario
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Programación</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Asesor"
          value={asesor}
          onChangeText={(text) => setAsesor(text)}
          editable={false}
        />
        <Picker
          selectedValue={tipoProgramacion}
          onValueChange={(itemValue) => setTipoProgramacion(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Facturado" value="facturado" />
          <Picker.Item label="Mpruebas" value="mpruebas" />
        </Picker>
        <Autocomplete
            data={searchResults} // Usar searchResults en lugar de cliente
            defaultValue={cliente}
            onChangeText={(text) => setCliente(text)}
            placeholder="Cliente"
            renderItem={({ item }) => (
              <Text>{item.nombre}</Text>
              // Personaliza cómo se muestran los resultados aquí
            )}
          />
        <TextInput
          style={styles.input}
          placeholder="Código Obra"
          value={codigoObra}
          onChangeText={(text) => setCodigoObra(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Producto Obra"
          value={productoObra}
          onChangeText={(text) => setProductoObra(text)}
        />
        <Picker
          selectedValue={bomba}
          onValueChange={(itemValue) => setBomba(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Auto Bomba" value="Auto Bomba" />
          <Picker.Item label="Bomba Estacionaria" value="Bomba Estacionaria" />
          <Picker.Item label="Sin Bomba" value="Sin Bomba" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Volumen"
          value={volumen}
          onChangeText={(text) => setVolumen(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Hora"
          value={hora}
          onChangeText={(text) => setHora(text)}
        />
        <Picker
          selectedValue={tipoFundida}
          onValueChange={(itemValue) => setTipoFundida(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Seleccione..." value="" />
          <Picker.Item
            label="ESCALERA"
            value="43C57FFF-A276-4C34-B682-5A13252342E5"
          />
          <Picker.Item
            label="VIGA"
            value="ADCA9288-FB6C-4ED5-96E6-BEEF3E632FB6"
          />
          {/* Agrega más opciones aquí */}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Observaciones"
          value={descripcion}
          onChangeText={(text) => setDescripcion(text)}
          multiline
        />
        <Button title="Guardar" onPress={handleGuardar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  form: {
    borderWidth: 1,
    borderColor: "rgb(227, 235, 246)",
    padding: 10,
    borderRadius: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "rgb(227, 235, 246)",
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 4,
  },
});

export default FormCreateProgramacionSreen;