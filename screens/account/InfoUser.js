import React, { useState } from 'react'
import { Alert } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from "react-native-elements";
import { updateProfile, uploadImage } from '../../utils/actions';
import { LoadImageFromGallery } from '../../utils/helpers';

export default function InfoUser({ user, setLoading, setLoadingText }) {

    const [photoUrl, setPhotoUrl] = useState(user.photoURL)

    const changePhoto = async () => {

        

        const result = await LoadImageFromGallery([1,1])

        if (!result.status) {
            return
        }
        setLoadingText("Updating profile image...")
        setLoading(true)
        const resultUploadImage = await uploadImage(result.image, "avatars", user.uid)
        console.log(resultUploadImage);

        if(!resultUploadImage.statusResponse) {
            setLoading(false)
            Alert.alert("Error uploading storing the profile pic")
            return
        }

        const resultUpdateProfile = await updateProfile({photoURL: resultUploadImage.url})
        setLoading(false)
        if (resultUpdateProfile.statusResponse) {
            setPhotoUrl(resultUploadImage.url)
        } else {
            Alert.alert("Can not update the profile photo")
        }
    }

    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size='large'
                onPress={changePhoto}
                source={
                    user.photoURL ? 
                    { uri : photoUrl } : require('../../assets/default-avatar.png')
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
