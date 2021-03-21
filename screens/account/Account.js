import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Loading from '../../components/Loading';
import { getCurrentUser } from '../../utils/actions';


import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

const Account = () => {
    const [login, setLogin] = useState(null);

    useEffect(() => {
        const user = getCurrentUser()
        user ? setLogin(true) : setLogin(false)
        
    }, [])

    if(login ===  null) {  
        return <Loading isVisible={true} text = "cargando..."/>
    }
    return login ? <UserLogged/> : <UserGuest/>
}

export default Account

const styles = StyleSheet.create({})