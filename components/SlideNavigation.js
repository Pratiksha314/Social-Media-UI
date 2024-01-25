import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

const Drawer = createDrawerNavigator();

export const SlideNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={
        {
          headerShown: false,
          swipeEnabled: true,
        }
      }
    >
      <Drawer.Screen name="Signup" component={SignupPage} />
      <Drawer.Screen name="Login" component={LoginPage} />
    </Drawer.Navigator>
  );
}