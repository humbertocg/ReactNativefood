import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default (RestauranId) => {
  const [results, setResults] = useState([]);
  const [item, setItem] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showActivityIndicator, setStateActivityIndicator] = useState(false);

  const searchAPI = async (searchTerm) => {
    setStateActivityIndicator(true);
    setErrorMessage(null);
    try {
      const response = await yelp.get("/businesses/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "san francisco",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(JSON.stringify(err) + " Something went wrong");
    }
    setStateActivityIndicator(false);
  };

  const getRestaurantInfo = async (searchTerm) => {
    setStateActivityIndicator(true);
    setErrorMessage(null);
    try {
      const response = await yelp.get("/businesses/" + searchTerm);
      setItem(response.data);
    } catch (err) {
      setErrorMessage(JSON.stringify(err) + " Something went wrong");
    }
    setStateActivityIndicator(false);
  };

  //The good way!!! Execute only once time when component is already rendered
  useEffect(() => {
    if (RestauranId == null) {
      searchAPI("pasta");
    } else {
      getRestaurantInfo(RestauranId);
    }
  }, []);

  if (RestauranId == null) {
    return [searchAPI, results, errorMessage, showActivityIndicator];
  } else {
    return [item, errorMessage, showActivityIndicator];
  }
};
