import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button } from "react-native-elements";
import Loading from '../../components/Loading'

export default function UserGuest() {
    return (
        <ScrollView
            centerContent
            style={styles.viewBody}>
            <Image
                source={require("../../assets/restaurantLogo.png")}
                resizeMode="contain"
                style={styles.image}
            />

            <View>
                <Text style={styles.title}>Review your profile in restaunrats</Text>
                <Text style={styles.description}>How you'll describe your best restaunrat? Search and view your favorites.</Text>
            </View>

            <Button
                title = 'View your profile'
                buttonStyle = {styles.button}
                onPress={() => console.log("Click!!!")}
            />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 200,
        width: "100%",
        marginBottom: 10,
        textAlign: "center"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
        
    },
    description: {
        marginBottom: 20,
        color: '#652273'
    },
    button: {
        backgroundColor: '#442484'
    }
})
