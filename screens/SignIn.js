import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../assets/icons/logo.png';
import { CustomInput } from '../components';
import { SignInButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { FONTS } from '../constants';



const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
       navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    };

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }
        return (

            
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={Logo}
                        style={[styles.logo,
                        { height: height * 0.3 }]}
                        resizeMode="contain" />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.body}>
                        Username
                    </Text>
                    <CustomInput
                        placeholder="Username/Email"
                        value={username}
                        setValue={setUsername} />

                    <Text style={styles.body}>
                        Password
                    </Text>
                    <CustomInput
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={true} />

                    <TouchableOpacity>
                        <SignInButton text="Sign In" onPress={onSignInPressed} type="PRIMARY" />
                    </TouchableOpacity>

                    <SignInButton
                        text="Don't have account? Create One"
                        onPress={onSignUpPressed}
                        type="TERTIARY" />

                </View>
                <StatusBar barStyle="dark-content" />
            </View >
           
        );
    };

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#E1E5EA",
        /*borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,*/
    },
    footer: {
        flex: 2,
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 300,
    },
    body: {
        ...FONTS.worksansbold,
        fontSize: 16,
        color: "#516BEB"
    }, 
});


export default SignIn;
