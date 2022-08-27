import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ResultShowScreen from "./src/screens/ResultsShowScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Results : ResultShowScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "TheFoodMonk",
    },
  }
);

export default createAppContainer(navigator);
