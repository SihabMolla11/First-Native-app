import { AntDesign } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../authContext/AuthProvider';

const LoginModal = ({ setShowModal, sowModal }) => {
    const [name, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setSetPassword] = useState('')
    const [form, setForm] = useState('login')

    const { useLogin, useRegister } = useContext(AuthContext)


    const handelLogin = () => {
        useLogin({ email, password })
    }

    const handelRegister = () => {

        const registerData = {
            name, email, password
        }

        useRegister(registerData)
    }

    return (
        <View >
            <Modal visible={sowModal} transparent={true} animationType='fade'>
                <View style={modalStyle.minView}>
                    <View style={modalStyle.buttonView}><TouchableOpacity style={modalStyle.closeButton} onPress={() => setShowModal(false)} >
                        <AntDesign name="close" size={24} color="white" />
                    </TouchableOpacity  >
                    </View>


                    <View style={modalStyle.LRContainer}>
                        <TouchableOpacity onPress={() => setForm('login')}>
                            <Text style={{
                                fontSize: 20,
                                color: '#ffffff',
                                fontWeight: 700
                            }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setForm('register')}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#ffffff',
                                    fontWeight: 700
                                }}
                            >Registration</Text>
                        </TouchableOpacity>
                    </View>

                    {
                        form === 'login' && <View style={modalStyle.form}>

                            <TextInput
                                style={modalStyle.input}
                                placeholder="Email"
                                value={email}
                                onChangeText={(Text) => setEmail(Text)}
                            />
                            <TextInput
                                style={modalStyle.input}
                                placeholder="Password"
                                value={password}
                                secureTextEntry
                                onChangeText={(Text) => setSetPassword(Text)}
                            />
                            <TouchableOpacity style={modalStyle.loginButton} onPress={handelLogin}><Text style={{
                                fontSize: 16,
                                fontWeight: 700
                            }}>Login</Text></TouchableOpacity>

                        </View>
                    }

                    {
                        form === 'register' && <View style={modalStyle.form}>

                            <TextInput
                                style={modalStyle.input}
                                placeholder="name"
                                value={name}
                                onChangeText={(Text) => setUserName(Text)}
                            />
                            <TextInput
                                style={modalStyle.input}
                                placeholder="email"
                                value={email}
                                onChangeText={(Text) => setEmail(Text)}
                            />
                            <TextInput
                                style={modalStyle.input}
                                placeholder="Password"
                                value={password}
                                secureTextEntry
                                onChangeText={(Text) => setSetPassword(Text)}
                            />
                            <TouchableOpacity style={modalStyle.loginButton} onPress={handelRegister}><Text style={{
                                fontSize: 16,
                                fontWeight: 700
                            }}>Sign Up</Text></TouchableOpacity>

                        </View>
                    }

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
        color: '#ffffff'
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
    },

    LRContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        position: 'absolute',
        top: 100,
    },


})