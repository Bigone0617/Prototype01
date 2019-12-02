import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainForm from './main_form';
import SignIn from './signin/signin';
import SignUp from './signup/signup';
import SignUp_Sub from './signup/signup_sub'


const AppStack = createStackNavigator(
    {
       Main: {screen: MainForm},
       SignIn: {screen: SignIn},
       SignUp: {screen: SignUp},
       SignUp_Sub: {screen: SignUp_Sub}
    },
    {initialRouteName:"Main", headerMode:'none'}
);

export default createAppContainer(AppStack);


