import React,{Component} from 'React';
import {Text,View} from 'react-native';

export default class CreatePost extends Component{
    render(){
        return(
            <View
                style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                 <Text>Feed</Text>
            </View>        
        )
    } 
}