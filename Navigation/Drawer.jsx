import * as React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Advisors, Categories, FavoriteAdvisors, Home, Journey, Settings } from '../Screens';
import { createAppContainer } from 'react-navigation'

const DrawerNavigatorExample = createDrawerNavigator(
    {
      //Drawer Optons and indexing
      NavScreen1: {
        screen: Home,
        navigationOptions: {
          drawerLabel: 'Demo Screen 1',
        },
      },
      NavScreen2: {
        screen: Settings,
        navigationOptions: {
          drawerLabel: 'Demo Screen 2',
        },
      }
    },
    {
      //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    //   contentComponent: CustomSidebarMenu,
      //Sidebar width
      drawerWidth: Dimensions.get('window').width - 130,
    }
  );

// const DrawerScreen = () => {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator 
//             initialRouteName="Home"

//             >
//                 <Drawer.Screen name="Home" component={Home} />
//                 <Drawer.Screen name="Settings" component={Settings} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }

export default createAppContainer(DrawerNavigatorExample);