import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default (RestauranId) => {
  const [item, setResults] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [showActivityIndicator, setStateActivityIndicator] = useState(false);

  const searchAPI = async (searchTerm) => {
    setStateActivityIndicator(true);
    setErrorMessage(null);
    try {
      const response = await yelp.get("/businesses/" + searchTerm);
      setResults(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
    setStateActivityIndicator(false);
  };

  //The good way!!! Execute only once time when component is already rendered
  useEffect(() => {
    searchAPI(RestauranId);
  }, []);

  return [item, errorMessage, showActivityIndicator];
};
