import { createStackNavigator } from "react-navigation";
import MorseScreen from "../screens/tools/MorseScreen";
import SemiphoreScreen from "../screens/tools/SemiphoreScreen";
import ToolMenuScreen from "../screens/tools/ToolMenuScreen";

const ToolNavigator = createStackNavigator(
  {
    Tools: ToolMenuScreen,
    Morse: MorseScreen,
    Semiphore: SemiphoreScreen
  },
  {
    initialRouteName: "Tools",
    headerMode: "none"
  }
);

export default ToolNavigator;
