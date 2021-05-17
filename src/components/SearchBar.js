import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Ionicons name="ios-search" style={styles.iconStyle} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor="gray"
        value={term}
        onChangeText={onTermChange} //newTerm => onTermChange(newTerm)
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
  textInput: {
    borderColor: "transparent",
    marginRight: 5,
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
