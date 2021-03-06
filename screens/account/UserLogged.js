import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { closeSession, getCurrentUser } from '../../utils/actions';
import { Toast } from "react-native-easy-toast";
import Loading from '../../components/Loading';
import InfoUser from './InfoUser';

export default function UserLogged() {
    const toastRef = useRef()
    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(getCurrentUser())
    }, [])

    

    return (
        <View style={styles.container}>
            {
                user  && (
                    <View>
                        <InfoUser 
                            user={user} 
                            setLoading={setLoading} 
                            setLoadingText={setLoadingText}/>
                        <Text>Account options...</Text>
                    </View>
                )
                
            }

            <Button
                buttonStyle = {styles.btnLogOut}
                titleStyle = {styles.btnLogOuntTitle}
                title = "Log out"
                onPress = { () => {
                    closeSession()
                    navigation.navigate('restaurants')
                }}
            />
            {/* <Toast ref={toastRef} position='center' opacity={0.9}/> */}
            <Loading isVisible={loading} text={loadingText}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        backgroundColor: '#f9f9f9',
    },
    btnLogOut: {
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#442484',
        borderBottomWidth: 1,
        borderBottomColor: '#442484', 
        paddingVertical: 10,
    },
    btnLogOuntTitle: {
        color: '#442484',

    }
})
