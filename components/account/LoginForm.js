import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { size } from "lodash";

import { validateEmail } from "../../utils/helpers";
import { registerUser } from "../../utils/actions";
import { Loading } from "../../components/Loading";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation();

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    const login = () =>{
        console.log("login");
    }

    return (
        <View style={styles.container}>
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
            <Button
                title = "Log in"
                containerStyle = {styles.btnContainer}
                buttonStyle = {styles.button}
                onPress = { () => login()}
            />
            <Loading isVisible = {loading} text = "Loading..."/>
        </View>
    )
}

const defaultFormValues = () => {
    return {
        email: '',
        password: ''
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    input: {
        width: '100%',
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
