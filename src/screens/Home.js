import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import axios from 'react-native-axios'
import Start1Per from '../components/Start1Per'
import ListTxn from "../components/ListTxn";
import Impact from "../components/Impact";
import Score from "../components/Score";
import HomeModal from "../components/homeModal";
import InvListItem from "../components/InvListItem";
import InvModal from "../components/InvModal";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { PieChart } from "react-native-chart-kit";
export default function Home() {
    const [userName, setName] = useState("")
    const [balance, setBalance] = useState(0.00)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisible2, setModalVisible2] = useState(false)
    const [txn, setTxn] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [oneper, setPer] = useState(0)
    const [currentPer, setCurr] = useState(0)
    const [title, setTitle] = useState(0)

    const [goalProgress, setProgress] = useState(764)

    function callApi() {
        axios.get('http://484c-103-250-137-194.ngrok.io/viewUser')
            .then(function (response) {
                response = response.data[0]
                setName(response.userName)
                setBalance(response.balance)
            })
        axios.get("http://484c-103-250-137-194.ngrok.io/viewTransaction")
            .then(function (response) {
                setTxn(response.data)

            })
        axios.get("http://484c-103-250-137-194.ngrok.io/get1per")
            .then(function (response) {
                setPer(response.data)
                setLoading(false);
            })


    }
    useEffect(() => {
        callApi();
    }, [])

    return (
        <>
            {isLoading ?
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="black" />
                </View>

                :
                <>
                    <ScrollView>
                        <View style={styles.progressTitleView}>
                            <Text style={styles.title}>1% Progress</Text>
                            <Text style={{ fontSize: 12, color: "black", marginLeft: "5%" }}>This month</Text>
                        </View>
                        <View style={styles.progressBarView}>
                            <AnimatedCircularProgress
                                size={170}
                                rotation={0}
                                width={8}
                                fill={(100 * goalProgress) / oneper}
                                backgroundWidth={12}
                                tintColor="#FFAE42"
                                backgroundColor="#D3D3D3">
                                {
                                    (fill) => (
                                        <Text style={styles.progressText}>
                                            ₹{goalProgress}
                                        </Text>
                                    )
                                }
                            </AnimatedCircularProgress>
                            <TouchableOpacity style={styles.badge}>
                                <Text style={styles.superscript}>2x matching</Text>
                            </TouchableOpacity>

                        </View>
                        <SafeAreaView style={styles.Midcontainer}>
                            <Impact />
                            <Score amount="9125" />
                            <ListTxn Txn={txn} />
                        </SafeAreaView>
                        <View style={styles.progressTitleView}>
                            <Text style={styles.title}>Spending Patterns</Text>
                            <Text style={{ fontSize: 12, color: "black", marginLeft: "5%" }}>This month</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <PieChart
                                data={
                                    [
                                        {
                                            name: "Charity",
                                            population: 1,
                                            color: "#ffae42",
                                            legendFontColor: "#7F7F7F",
                                            legendFontSize: 15
                                        },
                                        {
                                            name: "Investments",
                                            population: 20,
                                            color: "#57167E",
                                            legendFontColor: "#7F7F7F",
                                            legendFontSize: 15
                                        },
                                        {
                                            name: "Food",
                                            population: 5,
                                            color: "#9B3192",
                                            legendFontColor: "#7F7F7F",
                                            legendFontSize: 15
                                        },
                                        {
                                            name: "Shopping",
                                            population: 5,
                                            color: "#EA5F89",
                                            legendFontColor: "#7F7F7F",
                                            legendFontSize: 15
                                        },
                                        {
                                            name: "Rent",
                                            population: 20,
                                            color: "#F7B7A3",
                                            legendFontColor: "#7F7F7F",
                                            legendFontSize: 15
                                        },
                                        {
                                            name: "Others",
                                            population: 49,
                                            color: "#FFF1C9",
                                            legendFontColor: "#7F7F7F",
                                            legendFontSize: 15
                                        },
                                    ]
                                }
                                hasLegend={false}
                                width={200}
                                height={150}
                                chartConfig={{
                                    color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
                                    labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,

                                }}
                                accessor={"population"}
                                backgroundColor={"transparent"}
                                paddingLeft={"15"}
                            />

                            <View>
                                <TouchableOpacity style={[styles.badge2, { backgroundColor: "#ffae42" }]} onPress={() => {
                                    setModalVisible(true)
                                    setCurr(1)
                                    setTitle("Charity")
                                }}
                                >
                                    <Text style={styles.superscript}>1% Charity</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.badge2, { backgroundColor: "#57167E" }]} onPress={() => {
                                    setModalVisible(true)
                                    setCurr(20)
                                    setTitle("Investments")
                                }}
                                >
                                    <Text style={styles.superscript}>20% Investments</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.badge2, { backgroundColor: "#9B3192" }]} onPress={() => {
                                    setModalVisible(true)
                                    setCurr(5)
                                    setTitle("Food")
                                }}
                                >
                                    <Text style={styles.superscript}>5% Food</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.badge2, { backgroundColor: "#EA5F89" }]} onPress={() => {
                                    setModalVisible(true)
                                    setCurr(5)
                                    setTitle("Shopping")
                                }}
                                >
                                    <Text style={styles.superscript}>5% Shopping</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.badge2, { backgroundColor: "#F7B7A3" }]} onPress={() => {
                                    setModalVisible(true)
                                    setCurr(20)
                                    setTitle("Rent")
                                }}
                                >
                                    <Text style={styles.superscript}>20% Rent</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.badge2, { backgroundColor: "#FFF1C9" }]} onPress={() => {
                                    setModalVisible(true)
                                    setCurr(49)
                                    setTitle("Others")
                                }}
                                >
                                    <Text style={styles.superscript}>49% Others</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.progressTitleView}>
                            <Text style={styles.title}>Investments</Text>
                        </View>
                        <View style={{ backgroundColor: "rgba(255,255,153,0.5)", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: "6%", marginRight: "6%" }}>
                            <Text style={{ fontSize: 16, color: "black", marginBottom: "2.5%", marginTop: "2.5%", fontWeight: "bold" }}>Apna Mutual Fund</Text>
                            <Text style={{ fontSize: 16, color: "black", marginBottom: "2.5%", marginTop: "2.5%", }}>Invested: 156000</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: "6%", marginRight: "6%" }}>
                            <Text style={{ fontSize: 14, color: "black", marginBottom: "5%" }}>Environment:9.9</Text>
                            <Text style={{ fontSize: 14, color: "black", marginBottom: "5%" }}>Social:9.78</Text>
                            <Text style={{ fontSize: 14, color: "black", marginBottom: "5%" }}>Governance:8.6</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: "6%", marginRight: "6%" }}>
                            <Text style={{ fontSize: 16, color: "black", marginBottom: "5%" }}>Total Score: 27</Text>
                            <TouchableOpacity style={[styles.badge,{width:100,height:25}]} onPress={()=>{setModalVisible2(true)}}>
                                <Text style={[styles.superscript,{fontSize:12}]}>Suggestions</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "90%", marginLeft: "5%" }}>
                            <InvListItem num="Stock" per="%" E="E" S="S" G="G" total="Total" st="bold" pertile="%ile" />
                            <InvListItem num="Infosys" per={19} E={1.1} S={7.7} G={6.5} total={15} pertile={9} bg="rgba(175,225,175,0.5)" />
                            <InvListItem num="Axis" per={17} E={2.1} S={13.8} G={13.3} total={29} pertile={57} bg="rgba(255,255,153,0.5)" />
                            <InvListItem num={"Ultratech Cement"} per={16} E={18.5} S={5.0} G={10.6} total={34} pertile={73} bg="rgba(255,153,102,0.5)" />
                            <InvListItem num={"Coal India"} per={15} E={16.8} S={12.1} G={7.1} total={36} pertile={77} bg="rgba(255,153,102,0.5)" />
                            <InvListItem num={"Nestle"} per={13} E={11} S={10.3} G={5.8} total={27} pertile={48} bg="rgba(255,255,153,0.5)" />
                        </View>

                        {modalVisible ?
                            <HomeModal modalVisible={modalVisible} setModalVisible={setModalVisible} title={title} per={currentPer} oneper={oneper} />
                            : null
                        }
                        {modalVisible2 ? 
                            <InvModal modalVisible={modalVisible2} setModalVisible={setModalVisible2} title="Suggestions" total={27} alter={['Infosys','Axis']} />
                        :    
                        
                        null}
                    </ScrollView>
                </>
            }
        </>

    )
}
const styles = StyleSheet.create({
    Topcontainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Midcontainer: {
        width: '100%',
        alignItems: "center"
    },
    text: {
        fontSize: 20
    },
    activity: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressText: {
        fontSize: 20,
        color: "#00A19D",
        fontWeight: "bold"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: "5%",
    },
    progressTitleView: {
        marginTop: StatusBar.currentHeight + 30,
        marginBottom: 20
    },
    progressBarView: {
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: "25%",
    },
    superscript: {
        fontSize: 10,
        // fontWeight: "bold",
        color: "white"
    },
    badge: {
        backgroundColor: "#00A19D",
        height: 20,
        width: 80,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "8%"
    },
    badge2: {
        backgroundColor: "#00A19D",
        height: 20,
        width: 100,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3
        // marginLeft: "8%"
    }


})