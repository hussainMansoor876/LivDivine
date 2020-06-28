import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Advisors, Categories, FavoriteAdvisors, Home, Journey, Settings, Login } from '../Screens';
import { removeUser } from '../Redux/actions/authActions'
import { createAppContainer } from 'react-navigation'
import Sidebar from './Sidebar'

const Logout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeUser)
  }, [])

  return (
    <SafeAreaView style={loginStyles.setFlex}>
      <ScrollView style={loginStyles.setFlex}>
        <Text style={{
          textAlign: 'center',
          fontSize: 24
        }}>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const DrawerNavigatorExample = createDrawerNavigator(
  {
    Home: Home,
    Advisors: Advisors,
    Categories: Categories,
    MyOrders: Categories,
    FavoriteAdvisors: FavoriteAdvisors,
    BecomeAdvisors: Categories,
    Settings: Settings,
    Logout: Logout
  },
  {
    // contentOptions: {
    //   activeTintColor: "#e91e63"
    // },
    contentComponent: props => <Sidebar {...props} />,
    drawerType: 'slide'
    // drawerWidth: Dimensions.get('window').width - 130,
  }
);

export default createAppContainer(DrawerNavigatorExample);