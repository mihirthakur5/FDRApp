import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS, FONTS } from '../../constants';
import { TextInput } from 'react-native-paper'; 
import { ScrollView } from 'react-native-gesture-handler';





const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        /*<View style={styles.container}>*/
            
            <TextInput mode='outlined' 
                value={value}
                onChange={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}   
            />
            
        /*</View>*/
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        width: '100%',
        

    
        borderColor: '#516BEB',
        borderWidth: 1,
        borderRadius: 7,
        paddingHorizontal: 10,
        marginVertical: 7,
        paddingLeft: 10
    },
    input: {
       
       fontSize: 14,
       color: 'black'
    },
});

export default CustomInput;
