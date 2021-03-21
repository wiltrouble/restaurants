import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Loading from '../../components/Loading';
import { getCurrentUser, isUserLogged } from '../../utils/actions';
import { useFocusEffect, useNavigation } from "@react-navigation/native";


import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

const Account = () => {
    const [login, setLogin] = useState(null);

    useFocusEffect(

        useCallback(() => {
            const user = getCurrentUser()
            user ? setLogin(true) : setLogin(false)
            // setLogin(isUserLogged())
        }, [])
    )

    if(login ==  null) {  
        return <Loading isVisible={true} text = "cargando..."/>
    }
    return login ? <UserLogged/> : <UserGuest/>
}

export default Account

const styles = StyleSheet.create({})