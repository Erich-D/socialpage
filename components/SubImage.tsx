import React from "react";
import {View, Image, StyleSheet} from 'react-native';
import Heading from "./Heading";

type propTypes = {
    name:string
    uri: string
    key: string
}

// Pretty basic component. Takes in a uri and renders the image
export default function SubImage(props:propTypes) {
    return <View>
        <Heading size={10} txt={props.name}/>
        <Image style = {styles.image} source = {{uri: props.uri}}/>
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
        
    }
})