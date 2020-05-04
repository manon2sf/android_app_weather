import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Components/app/Home/Home';
import Forecast from './Components/app/Forecast/Forecast';
import Splashscreen from './Components/loading/Splashscreen/Splashscreen';
import Login from './Components/auth/Login';

const appDrawer = createDrawerNavigator(
  {
    home: Home,
    forecast: Forecast,
  },

  {
    initialRouteName: 'home',
    drawerPosition: 'right',
  },
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      app: appDrawer,
      loading: Splashscreen,
      auth: Login,
    },
    {
      initialRouteName: 'app',
    },
  ),
);

export default App;
