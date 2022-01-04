import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import CommunityImpact from "../components/communityImpact";
import CompanyDetails from "../components/companyDetails";
import Score from "../components/Score";
import EmployeeList from "../components/EmployeeList";
export default function Community() {

    return (
        <ScrollView>
            <SafeAreaView style={styles.Midcontainer}>
                <CompanyDetails />
                <CommunityImpact />
                <Score amount={94000} />
                <EmployeeList />
            </SafeAreaView>
        </ScrollView>


    )
}
const styles = StyleSheet.create({
    Midcontainer: {
        width: '100%',
        alignItems: "center"
    }
})