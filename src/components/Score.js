import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { BarChart, LineChart } from "react-native-chart-kit";
export default function Score({ amount }) {

    return (
        <View style={styles.item}>
            <View style={styles.verticleView}>
                <Text style={styles.title}>Your Donation</Text>
                <Text style={styles.text}>₹{amount}</Text>
            </View>
            <View >
                <BarChart
                    style={{
                        flex: 1,
                        paddingRight: 0,
                    }}
                    showBarTops={false}
                    withHorizontalLabels={false}
                    withVerticalLabels={false}
                    withInnerLines={true}
                    segments={3}
                    fromZero={true}
                    data={{
                        datasets: [
                            {
                                data: [
                                    1000, 1300, 1100, 1200, 900, 1000, 1200, 800, 1100
                                ]
                            }
                        ]
                    }}
                    width={200}
                    height={80}
                    chartConfig={{
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientToOpacity: 0,
                        barPercentage: 0.5,
                        fillShadowGradient: `rgba(255, 174, 66, 1)`,
                        fillShadowGradientOpacity: 0.8,
                        color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForBackgroundLines: {
                            strokeWidth: 1,
                            stroke: '#efefef',
                            strokeDasharray: '0',
                        },
                    }}
                    verticalLabelRotation={0}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 10,
        width: "90%",
        borderWidth: 2,
        borderColor: "#D3D3D3"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },
    verticleView: {
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        fontSize: 10
    }

})