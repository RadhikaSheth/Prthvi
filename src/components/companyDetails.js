import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function CompanyDetails() {
    return (
        <View style={styles.container}>
            {/* <Text>The Good Company</Text> */}
            <Image
                source={require('../../assets/company_logo.png')}
                style={{}}
            />
            <Text style={styles.text}>Matching all employee donations upto <Text style={{fontWeight:"bold"}}>1%</Text></Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        alignItems: "center",
        marginTop:"10%"
    },
    text:{
        fontStyle:'italic'
    }
})