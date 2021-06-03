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
import EndpointTypeEnum from "../enums/EndpointTypeEnum";

const SearchDetailsScreen = ({ navigation }) => {
  const [endpointTypeEnum] = EndpointTypeEnum();
  const [item, errorMessage, showActivityIndicator] = useResults({
    option: endpointTypeEnum.DetailsApi,
    restaurantId: navigation.getParam("id"),
  });

  return (
    <View style={styles.layout}>
      {showActivityIndicator ? (
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color="#0000ff"
        />
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
          ListFooterComponent={<View style={{ marginBottom: 15 }}></View>}
        />
      ) : null}

      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: { backgroundColor: "white", flex: 1 },
  imageStyle: {
    height: 250,
    width: 250,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
  },
  indicator: {
    flex: 1,
  },
});

export default SearchDetailsScreen;
