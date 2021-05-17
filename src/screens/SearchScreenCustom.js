import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreenCustom = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showActivityIndicator, setStateActivityIndicator] = useState(false);

  const searchAPI = async () => {
    setStateActivityIndicator(true);
    setErrorMessage(null);
    try {
      const response = await yelp.get("/businesses/search", {
        params: {
          term,
          limit: 50,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
    setStateActivityIndicator(false);
  };

  return (
    <ScrollView style={styles.background}>
      <View>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={searchAPI}
        />
        {showActivityIndicator ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : null}

        {results != null &&
        results.length > 0 &&
        errorMessage == null &&
        showActivityIndicator == false ? (
          <Image
            style={styles.imageStyle}
            source={{ uri: results[0].image_url }}
          />
        ) : null}

        {errorMessage ? <Text>{errorMessage}</Text> : null}

        {showActivityIndicator ? null : (
          <Text>We have found {results.length} results</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
  imageStyle: {
    height: 250,
    width: 250,
  },
});

export default SearchScreenCustom;
