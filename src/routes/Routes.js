import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screens/auth/Splash";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import ForgetPasswordScreen from "../screens/auth/ForgetPasswordScreen";
import UpdatePasswordScreen from "../screens/profile/UpdatePasswordScreen";
import Tabs from "./tabs/Tabs";
import MyAccountScreen from "../screens/profile/MyAccountScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: true, title: "" }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="forgetpassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="updatepassword" component={UpdatePasswordScreen} />
        <Stack.Screen name="tab" component={Tabs} />
        <Stack.Screen name="myaccount" component={MyAccountScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
