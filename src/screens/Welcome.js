import { View , Text} from "react-native-web";


function Welcome({route}) {
    const {region} =route.params
    return(
        <View>
            <Text>
                Welcome to {region} Customers Zone
            </Text>
        </View>
    )
}

export default Welcome;