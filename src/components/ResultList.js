import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantItem from "../components/RestaurantsItem";

const ResultList = ({ navigation, header, restaurants }) => {

  if(!restaurants.length){
    return null;
  }

  return (
    <View style={styles.restaurantItemStyle}>
      <Text style={styles.headerStyle}>{header}</Text>
      {restaurants != null && restaurants.length > 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(restaurant) => restaurant.id}
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Details", { id: item.id });
                }}
              >
                <RestaurantItem
                  result={item}
                  //imageUrl={item.-}
                  //name={item.name}
                  //review={`${item.rating} Stars, ${item.review_count} Reviews`}
                />
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={<View style={{ width: 15 }}></View>}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginLeft: 15,
    marginBottom: 5,
  },
  restaurantItemStyle: {
    marginRight: 0,
  },
  imageStyle: {
    height: 250,
    width: 250,
  },
});

export default withNavigation(ResultList);
