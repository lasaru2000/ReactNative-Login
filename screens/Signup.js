import { View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import { Image } from 'react-native';


const Signup = ({ navigation }) => {

  const [isPasswordShown,setIsPasswordShown] = useState(false);
  const [isChecked,setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
      <View style={{flex:1,marginHorizontal:22}}>

      <View style={{marginVertical:22}}>

      <Text style={{
          fontSize:22,
          fontWeight:'bold',
          marginVertical:'12',
          color:COLORS.black
        }}>
          Create Account
        </Text>
        <Text style={{
          fontSize:16,
          color:COLORS.black

        }}>
        Connects with Your Freinds Today
        </Text>

      </View>

      <View style={{marginBottom:12}}>
        <Text style={{
          fontSize:16,
          fontWeight:400,
          marginVertical:8
        }}>
          Email Adress
        </Text>

        <View style={{
          width:'100%',
          height:40,
          color:COLORS.black,
          borderWidth:2,
          borderRadius:8,
          alignItems:'center',
          justifyContent:'center',
          paddingLeft:22
        }}>
          <TextInput
          placeholder='Enter Your Email Adress'
          placeholderTextColor={COLORS.black}
          keyboardType='email-address'
          style={{
            width:'100%'
          }}>

          </TextInput>

        </View>


      </View>

      <View style={{marginBottom:12}}>
        <Text style={{
          fontSize:16,
          fontWeight:400,
          marginVertical:8
        }}>
          Phone Number
        </Text>

        <View style={{
          width:'100%',
          height:40,
          color:COLORS.black,
          borderWidth:2,
          borderRadius:8,
          flexDirection:'row',
          justifyContent:'space-between',
          paddingLeft:22
        }}>
          <TextInput
          placeholder='+94'
          placeholderTextColor={COLORS.black}
          keyboardType='numeric'
          style={{
            width:'12%',
            borderRightWidth:1,
            borderRightColor:COLORS.grey,
            height:'100%'
          }}/>
          <TextInput 
          placeholder='Enter Your Phone Number'
          placeholderTextColor={COLORS.black}
          keyboardType='numeric'
          style={{
            width:'80%'
          }}

          />

    

        </View>


      </View>

      
      <View style={{marginBottom:12}}>
        <Text style={{
          fontSize:16,
          fontWeight:400,
          marginVertical:8
        }}>
         Password
        </Text>

        <View style={{
          width:'100%',
          height:40,
          color:COLORS.black,
          borderWidth:2,
          borderRadius:8,
          alignItems:'center',
          justifyContent:'center',
          paddingLeft:22
        }}>
          <TextInput
          placeholder='Enter Password'
          placeholderTextColor={COLORS.black}
          secureTextEntry={!isPasswordShown}
          style={{
            width:'100%'
          }}/>
        <TouchableOpacity 
          onPress={() => setIsPasswordShown(!isPasswordShown)}
        style ={{
        position:'absolute',
        right:12
          
        }}>
          {
            isPasswordShown == true ? (
              <Ionicons name='eye-off' size={24} color={COLORS.black}/>

            ):
            (
              <Ionicons name='eye' size={24} color={COLORS.black}/>
            )
          }
          

        </TouchableOpacity>

        </View>
      </View>

      <View style={{
        flexDirection:'row',
        marginVertical:22
      }}>
      <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>I aggree to the terms and conditions</Text>

    
        
      </View>
      <Button
      title='Sign Up'
      filled
      style={{
        marginTop:12,
        marginBottom:4
      }}
      />

      <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>
        <View style={{
          flex:1,
          height:1,
          backgroundColor:COLORS.grey,
          marginHorizontal:10
        }}/>
          <Text style={{
            fontSize:14,
            color:COLORS.black
          }}>
            Or Sign Up With
          </Text>
        <View style={{
          flex:1,
          height:1,
          backgroundColor:COLORS.grey,
          marginHorizontal:10
        }}/>
      </View>

      <View style={{
        flexDirection:'row',
        justifyContent:'center'
      }}>
        <TouchableOpacity 
        onPress={()=>console.log("pressed")}
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          flexDirection: 'row',
          height:52,
          borderWidth:1,
          borderColor:COLORS.grey,
          marginRight:4,
          borderRadius:10
        }}
        >
        <Image 
        source={require("../assets/facebook.png")}
        style={{
          height:36,
          width:36,
          marginRight:8,

        }}
        resizeMode='contain'
        />
        <Text>facebook</Text>

        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>console.log("pressed")}
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          flexDirection: 'row',
          height:52,
          borderWidth:1,
          borderColor:COLORS.grey,
          marginRight:4,
          borderRadius:10
        }}
        >
        <Image 
        source={require("../assets/google.png")}
        style={{
          height:36,
          width:36,
          marginRight:8,

        }}
        resizeMode='contain'
        />
        <Text>Google</Text>

        </TouchableOpacity>

      </View>

      <View style={{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:22
      }}>
        <Text style={{fontSize:16,color:COLORS.black}} >Already Have An Account?</Text>
        <Pressable
        onPress={()=>navigation.navigate('login')}
        >
          <Text style={{
            fontSize:16,
            fontWeight:'bold',
            color:COLORS.primary,
            marginLeft:6
          }}>
            Login
          </Text>
        </Pressable>


      </View>

      </View>

    </SafeAreaView>

  )
}

export default Signup