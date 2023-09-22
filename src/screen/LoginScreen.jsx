import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen({ navigation }) {

    const [name, setName] = useState("")

    const handleLogin = () => {
        navigation.navigate("Main", {
            name: name
        })
    }

    return (
        <View>
            <Text>Login Screen</Text>
            <TextInput value={name} onChangeText={t => setName(t)}></TextInput>
            <TextInput></TextInput>
            <Button title="Login" onPress={handleLogin}/>
        </View>
    )
}