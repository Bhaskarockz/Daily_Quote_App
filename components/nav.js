import React from "react";
import { View,Text,TouchableOpacity,StyleSheet} from "react-native";

export default function Nav(){
    return(
    <View style={{flex:1,height:'20%',width:'100%',borderRadius:20,backgroundColor:'gray',alignItems:'center',justifyContent:'space-evenly',flexDirection:'row'}}>
    <TouchableOpacity style={styles.tch} >
        <Text style={styles.tst}>
            Daily
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tch}>
    <Text style={styles.tst}>
            Saved
        </Text>
        
    </TouchableOpacity>

    </View>
    )
}
const styles=StyleSheet.create({
    tch:{
        backgroundColor:'red',
        justifyContent:'center',
        width:'45%',
        height:'80%',
        borderRadius:20
    },
    tst:{
        justifyContent:'center',
        textAlign:'center',
        fontSize:20

    }
})