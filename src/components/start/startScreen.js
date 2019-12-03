import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartForm from './start_form';
import SignIn from '../signin/signin';
import SignUp from '../signup/signup';
import SignUp_Sub from '../signup/signup_sub';
import Main from '../main/mainScreen';


const AppStack = createStackNavigator(
    {
       Start: {screen: StartForm},
       SignIn: {screen: SignIn},
       SignUp: {screen: SignUp},
       SignUp_Sub: {screen: SignUp_Sub},
       Main : {screen: Main}
    },
    {initialRouteName:"Start", headerMode:'none'}
);

export default createAppContainer(AppStack);


