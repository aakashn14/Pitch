import React,{ useState } from 'react';
import { auth } from './firebaseConfig'; // Make sure the path is correct
import { signInWithEmailAndPassword } from 'firebase/auth';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';
import Logo from '../assets/images/frequency_logo/logo.js';
import Twitter from '../assets/images/platform_logos/twitter.jsx';
import Instagram from '../assets/images/platform_logos/instagram.jsx';
import Facebook from '../assets/images/platform_logos/facebook.jsx';
import Google from '../assets/images/platform_logos/google.jsx';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigation = useNavigation();
  
    const handleLogin = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.replace('HomePage');
      } catch (error) {
        console.error(error);
        setLoginError('Invalid email or password. Please try again.');
      }
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent:'center'}}>
            <View style={{paddingHorizontal:25}}>
                <View style={{alignItems: 'center'}}>
                    <Logo
                        height={200}
                        width={200}
                    />
                </View>

                <Text style={{
                    fontFamily: 'RMMedium',
                    fontSize:28, fontWeight:'500',
                    color:'#333',marginBottom:30,
                    }}>
                    Login
                </Text>

                <View 
                    style={{
                        flexDirection:'row',
                        borderBottomColor:'#ccc',
                        borderBottomWidth:1,
                        paddingBottom: 8,
                        marginBottom: 25,
                    }}>
                    <MaterialIcons 
                        name="alternate-email" 
                        size={20} color="#666" 
                        style={{marginRight: 5}}/>
                    <TextInput
                        placeholder="Email ID"
                        style={{flex: 1, paddingVertical: 0}}
                        keyboardType="email-address" 
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View 
                    style={{
                        flexDirection:'row',
                        borderBottomColor:'#ccc',
                        borderBottomWidth:1,
                        paddingBottom: 8,
                        marginBottom: 25,
                    }}>
                    <Ionicons 
                        name="lock-closed-outline"
                        size={20} color="#666" 
                        style={{marginRight: 5}}/>
                    <TextInput
                        placeholder="Password"
                        style={{flex: 1, paddingVertical: 0}}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{fontWeight:'700'}}>Forgot?</Text>
                    </TouchableOpacity>
                </View>
                {loginError !== '' && (
                    <Text style={{ color: 'red', marginBottom: 10 }}>{loginError}</Text>
                )}
                <TouchableOpacity
                    onPress={handleLogin}
                    style={{
                        backgroundColor:'#AD40AF',
                        padding:20,
                        borderRadius:10,
                        marginBottom:30
                    }}>
                    <Text 
                        style={{
                            textAlign:'center',
                            fontWeight:'700',
                            fontSize:16,
                            color:'#fff'
                        }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Text 
                    style={{
                        textAlign:'center',
                        color:'#666',
                        marginBottom:30
                    }}>
                    Or, login with...
                </Text>
                <View 
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginBottom:30
                    }}>
                    <TouchableOpacity 
                        onPress={() => {}} 
                        style={{
                            borderColor:'#ddd',
                            borderWidth:2,
                            borderRadius:10,
                            paddingHorizontal:30,
                            paddingVertical:10
                        }}>
                        <Facebook height={24} width={24} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => {}} 
                        style={{
                            borderColor:'#ddd',
                            borderWidth:2,
                            borderRadius:10,
                            paddingHorizontal:30,
                            paddingVertical:10
                        }}>
                        <Google height={24} width={24} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        onPress={() => {}} 
                        style={{
                            borderColor:'#ddd',
                            borderWidth:2,
                            borderRadius:10,
                            paddingHorizontal:30,
                            paddingVertical:10
                        }}>
                        <Instagram height={24} width={24} />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => {}} 
                        style={{
                            borderColor:'#ddd',
                            borderWidth:2,
                            borderRadius:10,
                            paddingHorizontal:30,
                            paddingVertical:10
                        }}>
                        <Twitter height={24} width={24} />
                    </TouchableOpacity>
                </View>

                <View 
                    style={{
                        flexDirection:'row',
                        justifyContent:'center',
                        marginBottom:30
                    }}>
                    <Text>New to the app? </Text>
                    <TouchableOpacity onPress={() => navigation.replace('register')}>
                        <Text 
                            style={{
                                color:'#AD40AF',
                                fontWeight:'700'
                            }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
