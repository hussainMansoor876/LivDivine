import * as React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Advisors, Categories, FavoriteAdvisors, Home, Journey, Settings } from '../Screens';
import { createAppContainer } from 'react-navigation'
import Sidebar from './Sidebar'

const DrawerNavigatorExample = createDrawerNavigator(
    {
      //Drawer Optons and indexing
      Home: Home,
      Advisors: Advisors,
      Categories: Categories,
      MyOrders: Categories,
      FavoriteAdvisors: FavoriteAdvisors,
      BecomeAdvisors: Categories,
      Settings: Settings,

    },
    {
      //For the Custom sidebar menu we have to provide our CustomSidebarMenu
      // contentOptions: {
      //   activeTintColor: "#e91e63"
      // },
      contentComponent: props => <Sidebar {...props} />,
      drawerType: 'slide'
      // drawerWidth: Dimensions.get('window').width - 130,
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