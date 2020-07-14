import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import ProvinceStack from './provinceStack';
import LoginStack from './loginStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Login: {
    screen: LoginStack,
  },
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
  Province:{
    screen: ProvinceStack,
  },
});

export default createAppContainer(RootDrawerNavigator);