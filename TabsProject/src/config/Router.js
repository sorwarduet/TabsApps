

//React native import Library
 import React from 'react';

//Third party import Library
 import { createBottomTabNavigator } from 'react-navigation';
 import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Icon } from 'react-native-elements';
//Create import Library

import Users from '../screens/Users';
import Albums from '../screens/Albums';
import Photos from '../screens/Photos';
import Posts from '../screens/Posts';

const Tabs = createBottomTabNavigator({
    Users: {
        screen: Users,
    },
    Albums: {
        screen: Albums,
    },
    Photos: {
        screen: Photos,
    },
    Posts: {
        screen: Posts,
    }
},
{
  navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Users') {
            iconName = `ios-people${focused ? '' : '-outline'}`;
          } else if (routeName === 'Albums') {
            iconName = `ios-albums${focused ? '' : '-outline'}`;
          } else if (routeName === 'Photos') {
            iconName = `ios-image${focused ? '' : '-outline'}`;
          } else if (routeName === 'Posts') {
            iconName = `ios-archive${focused ? '' : '-outline'}`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },

},
);

export default Tabs;
