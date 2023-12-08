import { View, Text,SafeAreaView, Pressable} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import hero1 from '../assets/hero1.jpg';
import { Image } from 'react-native';
import Button from '../components/Button';


const Welcome = ({navigation}) => {
  return (

  
<LinearGradient
 colors={[COLORS.secondary,COLORS.primary]}
 style={{
  flex:1

 }}>
  <View>
    <Image source={require("../assets/hero1.jpg")}
    style={{
      height:100,
      width:100,
      borderRadius:20,
      position:'absolute',
      top:10,
      transform:[
        {translateX:20},
        {translateY:30},
        {rotate:'-15deg'}
      ]
    }}/>
    <Image source={require("../assets/hero3.jpg")}
    style={{
      height:100,
      width:100,
      borderRadius:20,
      position:'absolute',
      top:-30,
      left:100,
      transform:[
        {translateX:50},
      {  translateY:50},
      {rotate:'5deg'}
      ]
    }}/>
  <Image source={require("../assets/hero3.jpg")}
    style={{
      height:100,
      width:100,
      borderRadius:20,
      position:'absolute',
      top:130,
      left:-50,
      transform:[
        {translateX:50},
      {  translateY:50},
      {rotate:'15deg'}
      ]
    }}/>
      <Image source={require("../assets/hero2.jpg")}
    style={{
      height:200,
      width:200,
      borderRadius:20,
      position:'absolute',
      top:110,
      left:100,
      transform:[
        {translateX:50},
      {  translateY:50},
      {rotate:'-15deg'}
      ]
    }}/>
  </View>

  {/* content */}

  <View style={{
    paddingHorizontal:22,
    position:'absolute',
    top:400,
    width:'100%'
  }}>
    <Text style={{
      fontSize:50,
      fontWeight:800,
      color:COLORS.white
    }}>Let's Get
    </Text>
    <Text style={{
      fontSize:45,
      fontWeight:800,
      color:COLORS.white

    }}>
      Started

    </Text>
    <View style={{marginVertical:22}}>
      <Text style={{
        fontSize:16,
        color:COLORS.white,
        marginVertical:4

      }}>
Connect With Each Other  With chatting
      </Text>
      <Text style={{
        fontSize:16,
        color:COLORS.white,

      }}>
Calling,Enjoy Safe and Private Texting
      </Text>

      <Button
      title ='Join Now'
      onPress ={()=>navigation.navigate('signup')}
      style={{
        marginTop:45,
        width:'100%'
      }}/>
      <View style={{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'center'
      }}>
        <Text style={{
          fontSize:16,
          color:COLORS.white,

        }}>
          Already Have An Account?
        </Text>
        <Pressable
        onPress={()=>navigation.navigate('login')}>
          <Text style={{
            fontSize:16,
            color:COLORS.white,
            fontWeight:'bold',
            marginLeft:4
          }}>
            Login

          </Text>
        </Pressable>

      </View>
    </View>

  </View>


</LinearGradient>




  )
}

export default Welcome