import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const RestaurantItem = ({ result /*, imageUrl, name, review*/ }) => {
  return (
    <View style={styles.layoutStyle}>
      <View>
        <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layoutStyle: { marginLeft: 15, flexDirection: "row" },
  imageStyle: {
    height: 250,
    width: 250,
    borderRadius: 5,
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
  },
});

export default RestaurantItem;
