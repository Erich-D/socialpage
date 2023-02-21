import React from 'react';
import {Text} from 'react-native';

type TextSize = {
    size:number
    txt:string
}

export default function Heading(props:TextSize){

    return <>
        <Text style={{fontSize:props.size}}>{props.txt}</Text>
    </>
}