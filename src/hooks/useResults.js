import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import EndpointTypeEnum from "../enums/EndpointTypeEnum";

export default ({option, restaurantId}) => {
  const [results, setResults] = useState([]);
  const [item, setItem] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showActivityIndicator, setStateActivityIndicator] = useState(false);
  const [endpointTypeEnum] = EndpointTypeEnum();

  const searchAPI = async (searchTerm) => {
    setStateActivityIndicator(true);
    setErrorMessage(null);
    try {
      //yelp.defaults.headers.post['Content-Type']= 'application/x-www-form-urlencoded';
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
    switch (option) {
      case endpointTypeEnum.SearchApi:
        searchAPI("pasta");
        break;
      case endpointTypeEnum.DetailsApi:
        getRestaurantInfo(restaurantId);
        break;
      default:
        searchAPI("pasta");
        break;
    }
  }, []);

  switch (option) {
    case endpointTypeEnum.SearchApi:
      return [searchAPI, results, errorMessage, showActivityIndicator];
    case endpointTypeEnum.DetailsApi:
      return [item, errorMessage, showActivityIndicator];
    default:
      return [item, errorMessage, showActivityIndicator];
  }
};
