import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import useResults from "../hooks/useResults";

const SearchDetailsScreen = ({ navigation }) => {
  const [item, errorMessage, showActivityIndicator] = useResults(
    navigation.getParam("id")
  );

  return (
    <View>
      {showActivityIndicator ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : null}

      {item != null &&
      errorMessage == null &&
      showActivityIndicator == false ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item}
          data={item.photos}
          renderItem={({ item }) => {
            return (
              <View>
                <Image source={{ uri: item }} style={styles.imageStyle} />
              </View>
            );
          }}
        />
      ) : null}

      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 250,
    width: 250,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 15,
  },
});

export default SearchDetailsScreen;
