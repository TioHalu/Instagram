import React from 'react'
import { View, Text, StatusBar} from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Father from "react-native-vector-icons/Feather";

const Home = () => {
    return (
        <View style={{backgroundColor:'black', height:"100%"}}>
            <StatusBar backgroundColor='white' barStyle="dark-content" animated={true}/>
            <View style={{
                justifyContent:'space-between',
                flexDirection:'row',
                alignItems:'center'
                }}>
<               Text style={{fontFamily:"Lobster-Regular",fontSize:26,paddingStart:5,paddingEnd:40, color:"white"}}>
                    Instagram
                </Text>
                <FontAwesome name = "plus-square-o" style={{fontSize : 30,color:"white"}}/>
                <Father name = "heart" style={{fontSize : 30,color:"white"}}/>
                <Father name = "navigation" style={{fontSize : 30,paddingEnd:5,color:"white"}}/>
                

            </View>
            
        </View>
    )
}

export default Home

