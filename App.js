import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SearchDetailsScreen from "./src/screens/SearchDetailsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    //SearchDetailsScreen,
    Details: {
      screen: SearchDetailsScreen,
      navigationOptions: ({ navigation }) => {
        return { title: "Bussiness details" };
      },
    },
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business search",
    },
  }
);

export default createAppContainer(navigator);
