import {View, Text, TextInput, StyleSheet, Button, NativeModules} from 'react-native';
import {useState} from 'react';

type InputInfo = {
    label1: string
    label2: string
    handler: any
}

export default function TextInputField(props:InputInfo) {
    // set up state to keep track of our name:
    const [name, setName] = useState<string>('');
    const [uri, setUri] = useState<string>('');

    return <View>
        <Text style={styles.heading1}>{props.label1}</Text>
        <TextInput value = {name} onChangeText = {setName} style = {styles.input}/> 
        <Text style={styles.heading1}>{props.label2}</Text>
        <TextInput value = {uri} onChangeText = {setUri} style = {styles.input}/>
        <Button onPress={addProps} title={`Seal ${name}'s Doom!`}/>
    </View>

    function addProps(){
        const newImage = {name:name, image:uri}
        props.handler(newImage)
        setName('')
        setUri('')
    }
}



const styles = StyleSheet.create({
    input : {
        borderWidth: 1,
        width: 200,
        margin: 'auto',
        backgroundColor:"white"
    },

    heading1:{
        //fontFamily: 'Cochin',
        //fontSize: 20,
        //fontWeight:'bold',
       // marginTop:30,
        color: 'white',
        backgroundColor:'black'
    },
})