import {createStackNavigator,createAppContainer} from 'react-navigation';


import UserList from './HomePage';
import Information from './Detail';

 const appNavigation = createStackNavigator({
  HomePage: { screen: UserList },
  Detail: { screen: Information },

  });

  const Container = createAppContainer(appNavigation);
export default Container;