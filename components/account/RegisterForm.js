import { size } from 'lodash'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { validateEmail } from '../../utils/helpers'
import { useNavigation } from "@react-navigation/native";

import { registerUser } from "../../utils/actions";
import Loading from '../Loading'



export default function RegisterForm() {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")
    const [loading, setLoading] = useState(false)
    
    const navigation = useNavigation();

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    const registerNewUser = async() => {
        if (!validateData()) {
            return;
        }
        setLoading(true)

        const result = await registerUser(formData.email, formData.password)
        setLoading(false)
        if (!result.statusResponse) {
            setErrorEmail(result.error)
            return
        }

        navigation.navigate("account")
    }

    const validateData = () => {
        setErrorConfirm("")
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true

        if (!validateEmail(formData.email)) {
            setErrorEmail("Invalid email")
            isValid = false
        }
        if(size(formData.password) < 6) {
            setErrorPassword("The password should have almost 6 characters")
            isValid = false
        }

        if(size(formData.confirm) < 6) {
            setErrorConfirm("The password should have almost 6 characters")
            isValid = false
        }

        if(formData.password !== formData.confirm) {
            setErrorConfirm("The passwords not match")
        }
        return isValid;
    }



    return (
        <View style={styles.form}>
            <Input
                placeholder="Email"
                containerStyle={styles.input}
                onChange={ (e) => onChange(e, "email")}
                keyboardType="email-address"
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
            <Input
                placeholder = "Password"
                containerStyle = {styles.input}
                password = {true}
                secureTextEntry  = {!showPassword}
                errorMessage={errorPassword}
                defaultValue={formData.password}
                onChange={ (e) => onChange(e, "password")}
                rightIcon={<Icon
                    type = "material-community"
                    name = { showPassword? "eye-off-outline" : "eye-outline" }
                    iconStyle={styles.icon}
                    onPress = {() => setShowPassword(!showPassword)}
                />}

            />
            <Input
                placeholder = "Confirm Password"
                containerStyle = {styles.input}
                password = {true}
                secureTextEntry  = {!showPassword}
                errorMessage={errorConfirm}
                defaultValue={formData.confirm}
                onChange={ (e) => onChange(e, "confirm")}
                rightIcon={<Icon
                    type = "material-community"
                    name = { showPassword? "eye-off-outline" : "eye-outline" }
                    iconStyle={styles.icon}
                    onPress = {() => setShowPassword(!showPassword)}
                />}
                
            />
            <Button
                title = "Register User"
                containerStyle = {styles.btnContainer}
                buttonStyle = {styles.button}
                onPress = { () => registerNewUser()}
            />
            <Loading isVisible = {loading} text = "Loading..."/>
        </View>
    )

    
}
const defaultFormValues = () => {
    return {
        email: '',
        password: '',
        confirm: ''
    }
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30,

    },
    input: {
        width: '100%'

    },
    btnContainer: {
        marginTop: 20,
        width: "95%",
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#442484'
    },
    icon: {
        color: "#c1c1c1"
    }
})
