import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
    return (
        <View >
            <Image source={require('./../../assets/login.png')} style={loginPageStyle.loginImage} />
            <View style={loginPageStyle.secondContainer}>
                <Text style={loginPageStyle.firstText}>Les't <Text style={{ fontWeight: 700 }}>Find Professional Clanging and repair</Text> Service</Text>
                <Text style={loginPageStyle.secondText}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ut cupiditate cumque iusto!
                </Text>
                <TouchableOpacity style={loginPageStyle.getStartButton} onPress={() => console.log("button Has clicked")}>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 500 }}>Les't Get Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

const loginPageStyle = StyleSheet.create({

    loginImage: {
        height: 500,
        width: 253,
        marginTop: 70,
        alignSelf: 'center',
        borderWidth: 4,
        borderRadius: 20,
        borderColor: '#000000'
    },

    secondContainer: {
        height: '80%',
        width: '100%',
        backgroundColor: '#7B1FB4',
        marginTop: -20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 10
    },

    firstText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 20
    },

    secondText: {
        fontSize: 18,
        color: '#00000',
        textAlign: 'center',
        marginTop: 10
    },

    getStartButton: {
        backgroundColor: '#ffffff',
        height: 50,
        borderRadius: 50,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },


})