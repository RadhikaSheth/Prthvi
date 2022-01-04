import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import EmployeeListItem from './EmployeeListItem'
export default function EmployeeList() {
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Employees</Text>
            </View>
            <EmployeeListItem
                name="Chintan Sheth"
                club="10"
                bg="#E05D5D"
                col="white"
            />
            <EmployeeListItem
                name="Max Warner"
                club="5"
                bg="#00A19D"
                col="white"
            />
            <EmployeeListItem
                name="Radhika Sheth"
                club="1"
                bg="#ffae42"
                col="white"
            />
            <EmployeeListItem
                name="Ramakrishna Sapan"
                club="1"
                bg="#ffae42"
                col="white"
            />
            <EmployeeListItem
                name="Sam Potter"
                club="10"
                bg="#E05D5D"
                col="white"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        marginTop: 30
    },
    title: {
        fontSize: 22,
        fontWeight: "bold"
    },
    titleView: {
        marginBottom: 20,
        paddingLeft: 10
    },
    
})


