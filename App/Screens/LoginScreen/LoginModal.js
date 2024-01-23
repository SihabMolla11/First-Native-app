import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginModal = ({ setShowModal, sowModal }) => {

    const [username, setUserName] = useState('')
    const [password, setSetPassword] = useState('')

    const handelLogin = () => {
        const loginData = { username, password }
        console.log(loginData);
    }

    return (
        <View >
            <Modal visible={sowModal} transparent={true} animationType='fade'>
                <View style={modalStyle.minView}>
                    <View style={modalStyle.buttonView}><TouchableOpacity style={modalStyle.closeButton} onPress={() => setShowModal(false)} >
                        <AntDesign name="close" size={24} color="white" />
                    </TouchableOpacity  >
                    </View>

                    <View style={modalStyle.form}>
                        <TextInput
                            style={modalStyle.input}
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextInput
                            style={modalStyle.input}
                            placeholder="Password"
                            value={password}
                            secureTextEntry
                            onChange={(e) => setSetPassword(e.target.value)}
                        />
                        <TouchableOpacity style={modalStyle.loginButton} onPress={handelLogin}><Text style={{
                            fontSize: 16,
                            fontWeight: 700
                        }}>Login</Text></TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default LoginModal


const modalStyle = StyleSheet.create({
    minView: {
        height: 450,
        width: '100%',
        backgroundColor: '#23A0D6',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },

    buttonView: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%'
    },

    closeButton: {
        borderWidth: 4,
        borderColor: '#FFFFFF',
        padding: 4,
        borderRadius: 50,
        width: 40,
        height: 40,
    },

    input: {
        borderWidth: 2,
        borderColor: '#ffffff',
        padding: 5,
        width: 250,
        borderRadius: 10,
        // marginBottom: 20
    },
    loginButton: {
        backgroundColor: '#ffffff',
        padding: 15,
        width: 250,
        borderRadius: 10,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
    },

    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        height: '100%'
    }



})