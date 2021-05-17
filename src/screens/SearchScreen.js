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
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage, showActivityIndicator] =
    useResults(null);

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    let result = results.filter((item) => {
      return item.price === price;
    });
    return result;
  };

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {showActivityIndicator ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : null}

      {results != null &&
      results.length > 0 &&
      errorMessage == null &&
      showActivityIndicator == false ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <ResultList
              header="Cost Effective"
              restaurants={filterResultsByPrice("$")}
            />
            <View style={styles.separatorStyle} />
            <ResultList
              header="Bit Pricer"
              restaurants={filterResultsByPrice("$$")}
            />

            <View style={styles.separatorStyle} />

            <ResultList
              header="Big Spender"
              restaurants={filterResultsByPrice("$$$")}
            />
          </View>
        </ScrollView>
      ) : null}

      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
  separatorStyle: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

export default SearchScreen;
