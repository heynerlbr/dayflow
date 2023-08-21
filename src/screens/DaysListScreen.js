import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DaysListScreen = () => {
  const navigation = useNavigation();
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentMonth + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentMonth,
    1
  ).getDay();

  const weeksInMonth = Math.ceil((daysInMonth + firstDayOfMonth) / 7);

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDay(day);

    const year = currentDate.getFullYear();
    const month = currentMonth + 1;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    const selectedDate = `${year}-${formattedMonth}-${formattedDay}`;

    var fecha = selectedDate;
    console.log("Fecha seleccionada:", selectedDate);

    navigation.navigate("ProgramacionDia", { fecha });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.weekContainer}>
        {Array.from({ length: weeksInMonth }, (_, weekIndex) => (
          <View key={weekIndex} style={{ flexDirection: "row" }}>
            {Array.from({ length: 7 }, (_, dayIndex) => {
              const day = weekIndex * 7 + dayIndex + 1 - firstDayOfMonth;
              if (day <= 0 || day > daysInMonth) {
                return <View key={day} style={styles.dayContainer} />;
              }
              return (
                <TouchableHighlight
                  key={day}
                  style={[
                    styles.dayContainer,
                    selectedDay === day && styles.selectedDayContainer,
                  ]}
                  onPress={() => handleDayPress(day)}
                  underlayColor="lightblue"
                >
                  <View>
                    <Text style={styles.dayName}>
                      {dayNames[dayIndex]}
                    </Text>
                    <Text
                      style={[
                        styles.dayText,
                        selectedDay === day && styles.selectedDayText,
                      ]}
                    >
                      {day}
                    </Text>
                  </View>
                </TouchableHighlight>
              );
            })}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  weekContainer: {
    flexDirection: "column",
  },
  dayContainer: {
    flex: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    margin: 2,
  },
  selectedDayContainer: {
    backgroundColor: "lightblue",
  },
  dayText: {
    fontSize: 20,
  },
  selectedDayText: {
    color: "white",
  },
  dayName: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DaysListScreen;