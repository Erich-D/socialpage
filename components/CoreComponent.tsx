import {View, ScrollView, Image, Text, StyleSheet, Button, TouchableOpacity, ImageBackground} from 'react-native';
import React, { useState } from 'react';
import SubImage from './SubImage';
import TextInputField from './TextInputField';

export type ImageInfo = {
    name:string
    image:string
}

const enemies: ImageInfo[] = [
    {name:'LEX LUTHOR', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Lex-Luthor-1.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'BATMAN', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Batman.png?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'BRAINIAC', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Brainiac-1.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'DARKSEID', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Darkseid.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'ZOD', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Zod.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'DOOMSDAY', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Doomsday.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'BIZARRO', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Bizarro.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'METALLO', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Metallo.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'MR. MXYZTPLK', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Mr.-Mxyzptlk.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'PARASITE', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Parasite.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'MONGUL', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Mongul.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'THE ANTI-MONITOR', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Anti-Monitor.png?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'MAGOG', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Magog.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'SUPERBOY-PRIME', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Superboy-Prime.png?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'CYBORG SUPERMAN', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/08/cyborg-superman-display.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'MANCHESTER BLACK', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Manchester-Black.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'THIS GUY', image:'https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/the-office/cast-the-office-dwight-schrute.jpg/_jcr_content/renditions/original.JPEG?downsize=1200:*&output-quality=70'}
]

const uris: ImageInfo[] = [
    {name:'THE KRYPTONITE MAN', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Kryptonite-Man.png?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'ULYSSES', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Ulysses.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'VYNDKTVX', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Vyndktvx.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    {name:'ROGOL ZAAR', image:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/05/Rogol-Zaar.jpg?q=50&fit=crop&w=750&dpr=1.5'},
    ]

export default function CoreComponents () {
    const [destroyed, setDestroyed] = useState<ImageInfo[]>(uris);
    const [stillLives, setStillLives] = useState<ImageInfo[]>(enemies);

    function addEnemy(enemy:ImageInfo){
        const newState:ImageInfo[]  = JSON.parse(JSON.stringify(stillLives))
        newState.push(enemy)
        setStillLives(newState)
    }

    function destroyEnemy(enemy:ImageInfo){
        const newState:ImageInfo[]  = JSON.parse(JSON.stringify(stillLives))
       setStillLives(newState.filter((e)=>e.name !== enemy.name))
        const newDestroyedState:ImageInfo[]  = JSON.parse(JSON.stringify(destroyed))
        newDestroyedState.push(enemy)
        setDestroyed(newDestroyedState)
    }

    return (
        <View>
            <ImageBackground source={{uri:'https://emsubtitle.com/wp-content/uploads/2021/03/MV5BMTI3MjI1NTAtYjI2ZS00OTVlLTk0OTQtNTc5M2U3NmNmYjMzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_.jpg'}} resizeMode="cover" style={styles.image}>
            <View style={styles.topContainer}>
                <View>
                    <Text style={styles.heading1}>I'm the real Superman</Text>
                    <Image style={{height:200,width:200}} source={{uri:'https://external-preview.redd.it/sVAhS9sl7nJp15mi-RSkNn1XHLNJxT37fEFyIi0WqZY.jpg?auto=webp&s=095c07c6e4d611cbbf94e91648b7880cee353f93'}}/>
                </View>    
                <View>
                    <TextInputField label1='Give me the name of an enemy to destroy' label2='Give me an image uri so I can more easily idenify him' handler={addEnemy}/>
                </View>
            </View>
            
            <Text style={styles.heading1}>Enemies I've destroyed</Text>
            <ScrollView contentContainerStyle = {styles.imagesContainer}>
                {destroyed.map(uri => (
                    <SubImage uri = {uri.image} key = {uri.image} name={uri.name}/>
                ))}
            </ScrollView>
            <Text style={styles.heading1}>Enemies I Will Destroy</Text>
            <ScrollView contentContainerStyle = {styles.imagesContainer}> 
                {stillLives.map(uri => (
                    <>
                    <View >
                        <SubImage uri = {uri.image} key = {uri.image} name={uri.name}/>
                    
                    {/* <View style={styles.button}>
                        <Button title='Destroy Enemy' onPress={()=>destroyEnemy(uri)} key={uri.name} />
                    </View> */}
                    <TouchableOpacity onPress={()=>destroyEnemy(uri)} style={styles.button}>
                        <Text style={styles.appButtonText}>{`Destroy ${uri.name}`}</Text>
                    </TouchableOpacity>
                    </View>
                    </>
                ))}
            </ScrollView> 
            </ImageBackground>
        </View>
    )
}
// contentContainerStyle = {styles.imagesContainer}
const styles = StyleSheet.create({
    imagesContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex:1
    },

    heading1:{
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight:'bold',
        marginTop:30,
        color: 'white',
        backgroundColor:'black'
    },

    topContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    button:{
        //width: "10%",
        //height:auto,
        borderRadius:5,
        borderWidth: 1,
        fontSize: 4,
        backgroundColor:"red"
    },

    appButtonText:{
        fontSize: 8,
        alignSelf: "center",
        color:"white"
    },

    image: {
        flex: 1,
        justifyContent: 'center',
      },
})