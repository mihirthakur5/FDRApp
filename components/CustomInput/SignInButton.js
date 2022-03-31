import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'


const SignInButton = ({colors, onPress, text, type = "PRIMARY"}) => {
    return (
        
        <Pressable
            onPress={onPress} 
            style={[styles.container, 
             styles[`container_${type}`]]}
        >  
            <Text 
            style={[styles.text, styles[`text_${type}`]]} >{text} 
            </Text>
        </Pressable>
        
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#229879',
        width: '100%',
        padding: 15,
        marginVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#516BEB',
    },

    container_TERTIARY: {
        backgroundColor: 'transparent',
        marginVertical: -5
    },

    text: {
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY: {
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        color: 'gray',
    }
})

export default SignInButton

