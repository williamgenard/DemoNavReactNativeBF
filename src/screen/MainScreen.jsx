import { Text } from "react-native";

export default function MainScreen({ route }) {

    const { name } = route.params

    return (
        <Text>Main screen : {name}</Text>
    )
}