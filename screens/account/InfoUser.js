import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from "react-native-elements";
import { LoadImageFromGallery } from '../../utils/helpers';

export default function InfoUser({ user }) {

    const changePhoto = async () => {
        const result = await LoadImageFromGallery([1,1])
        console.log(result)
    }

    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size='large'
                onPress={changePhoto}
                source={
                    user.photoURL ? 
                    { uri : photoURL } : require('../../assets/default-avatar.png')
                }
            />
            <View style={styles.infoUser}>
                <Text style={styles.name}>
                    {
                        user.displayName ? user.displayName : 'Anonimus'
                    }
                </Text>

                <Text style={styles.mail}>{ user.email }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        paddingVertical: '30'
    },
    infoUser: {
        marginLeft: 20
    },
    name: {
        fontWeight: 'bold',
        paddingBottom: 5
    },
    mail: {
        color: 'gray'
    }
    
})
