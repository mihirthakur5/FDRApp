import React, {useState} from 'react'
import { View, Text, StyleSheet,ImageBackground, useWindowDimensions, StatusBar } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../assets/icons/logo.png';
import { CustomInput } from '../components';
import { SignInButton } from '../components';
import { COLORS, images,FONTS } from '../constants';
import { useNavigation } from '@react-navigation/native';




function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.replace('SignIn');
    };

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    };

    const onLogInPressed = () => {
        navigation.navigate('SignIn');
    };

    return (
        
            <View style={styles.container}>
                <Text style={styles.header}>
                    Get Started
                </Text>
                <View style={styles.footer}>

                    <Text style={styles.body}> Email

                    </Text>

                    <CustomInput

                        placeholder="Username"
                        value={username}
                        setValue={setUsername}
                    />

                    <Text style={styles.body}>
                        Password
                    </Text>
                    <CustomInput
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={true}
                         
                    />
                
                <TouchableOpacity>
                    <SignInButton text="Register" 
                        onPress={onRegisterPressed} type="PRIMARY" />
                </TouchableOpacity>
                    <SignInButton
                        text="Already Registered? Log In"
                        onPress={onLogInPressed}
                        type="TERTIARY" />

                </View>

                <StatusBar barStyle="dark-content" />
            </View>
        
    );

};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20
    },

footer: {
    flex:4,
    paddingHorizontal: 10,
    
},    

    body: {
       
    justifyContent: "center",
    ...FONTS.worksansbold,
    fontSize: 16,
    color: "#516BEB",
    padding: 3,
    paddingHorizontal: 5
        
    },
    
    header: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 48,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 20,
        alignContent: "flex-start",
        paddingTop: 50,
        marginVertical: 20,
        ...FONTS.worksansbold
        
        
    }
});


export default SignUp;
