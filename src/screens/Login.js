import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Animated,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [transformAnimation] = useState(new Animated.Value(0));

  const handleTap = () => {
    Animated.timing(transformAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setFormVisible(true));
  };

  const translateY = transformAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const handleSubmit = () => {
    console.log("Iniciar sesión:", username, password);

    // Realizar la solicitud a la API para validar el usuario
    fetch("https://fdigital.sodeker.com/api/LoginMovil", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          // Usuario autenticado correctamente
          const token = data.access_token;
          // Realizar las operaciones necesarias con el token de acceso
          console.log("Token de acceso:", token);
          fetchUserProfile(token);

          // ...
        } else {
          // Error de autenticación
          console.log("Error de autenticación:", data.msg);
        }
      })
      .catch((error) => {
        console.log("Error al conectar con la API:", error);
      });
  };

  const fetchUserProfile = (token) => {
    fetch("https://fdigital.sodeker.com/api/ProfileMovil", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          // Perfil de usuario obtenido correctamente
          const userProfile = data.data;
          // Realizar las operaciones necesarias con el perfil de usuario
          console.log("Perfil de usuario:", userProfile);
          // Navegar al screen de perfil de usuario y pasar la información del userProfile
          navigation.navigate("Perfil", { userProfile });
          // ...
        } else {
          // Error al obtener el perfil de usuario
          console.log("Error al obtener el perfil de usuario:", data.msg);
        }
      })
      .catch((error) => {
        console.log("Error al conectar con la API:", error);
      });
  };

  useEffect(() => {
    handleTap();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TapGestureHandler onHandlerStateChange={handleTap}>
        <Animated.View
          style={[styles.overlay, { opacity: transformAnimation }]}
        >
          {formVisible && (
            <Animated.View
              style={[
                styles.formContainer,
                { transform: [{ translateY: translateY }] },
              ]}
            >
              <View style={styles.avatarContainer}>
                <Image
                  source={require("../images/acecard.png")}
                  style={styles.avatar}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <Button title="Iniciar sesión" onPress={handleSubmit} />
            </Animated.View>
          )}
        </Animated.View>
      </TapGestureHandler>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "white",
    width: "80%",
    padding: 20,
    borderRadius: 8,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 4,
  },
});

export default Login;