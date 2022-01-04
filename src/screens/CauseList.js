import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native'
import axios from 'react-native-axios'
import CauseItem from "../components/CauseItem";
import Start1Per from '../components/Start1Per'
export default function CauseList({ navigation }) {
    const [oneper, setPer] = useState()
    const [userName, setName] = useState("")
    const [isgoalStarted, setGoal] = useState(false)
    const [isLoading, setLoading] = useState(true);
    function callApi() {
        axios.get("http://484c-103-250-137-194.ngrok.io/get1per")
            .then(function (response) {
                setPer(response.data)
            })
        axios.get("http://484c-103-250-137-194.ngrok.io/get1per")
            .then(function (response) {
                setPer(response.data)
            })
        axios.get('http://484c-103-250-137-194.ngrok.io/viewUser')
            .then(function (response) {
                response = response.data[0]
                setName(response.userName)
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
                    {isgoalStarted ?
                        <>
                            < View style={styles.container}>
                                <Text style={styles.title}>Causes</Text>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('CauseDetail',
                                        {
                                            INTRO_DATA: [
                                                {
                                                    key: "1",
                                                    item: "Tree",
                                                    price: "200",
                                                    url: require('../../assets/tree.png'),
                                                    impactText: "Trees",
                                                    impact: Math.floor(oneper / 200)
                                                }
                                            ],
                                            causeType: "Climate Change"
                                        }
                                    )}
                                    style={styles.itemView}>
                                    <CauseItem title="Climate change" iconName="earth" />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('CauseDetail',
                                        {
                                            INTRO_DATA: [
                                                {
                                                    key: "1",
                                                    item: "A Meal",
                                                    price: "100",
                                                    url: require('../../assets/meal.png'),
                                                    impactText: "Meals",
                                                    impact: Math.floor(oneper / 100)
                                                },
                                                {
                                                    key: "2",
                                                    item: "Mid-Day Meals",
                                                    price: "100",
                                                    url: require('../../assets/midDayMeal.png'),
                                                    impactText: "Mid-Day Meals",
                                                    impact: Math.floor(oneper / 100)
                                                },
                                                {
                                                    key: "3",
                                                    item: "Living Expense of an orphan",
                                                    price: "900",
                                                    url: require('../../assets/orphan.png'),
                                                    impactText: "Orphan's Expense",
                                                    impact: Math.floor(oneper / 900)
                                                }
                                            ],
                                            causeType: "Children"
                                        }
                                    )}
                                    style={styles.itemView}>
                                    <CauseItem title="Children" iconName="human-male-child" />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('CauseDetail',
                                        {
                                            INTRO_DATA: [

                                                {
                                                    key: "4",
                                                    item: "Monthly School Fees",
                                                    price: "500",
                                                    url: require('../../assets/fee.png'),
                                                    impactText: "students' school fees",
                                                    impact: Math.floor(oneper / 500)
                                                },
                                                {
                                                    key: "1",
                                                    item: "Pencil",
                                                    price: "5",
                                                    url: require('../../assets/pencil.png'),
                                                    impactText: "Pencils",
                                                    impact: Math.floor(oneper / 5)
                                                },
                                                {
                                                    key: "2",
                                                    item: "Notebook",
                                                    price: "35",
                                                    url: require('../../assets/notebook.png'),
                                                    impactText: "Notebooks",
                                                    impact: Math.floor(oneper / 35)
                                                },
                                                {
                                                    key: "3",
                                                    item: "Stationary Kit",
                                                    price: "225",
                                                    url: require('../../assets/kid.png'),
                                                    impactText: "Kits",
                                                    impact: Math.floor(oneper / 225)
                                                },
                                            ],
                                            causeType: "Education"
                                        }
                                    )}
                                    style={styles.itemView}>
                                    <CauseItem title="Education" iconName="school" />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('CauseDetail',
                                        {
                                            INTRO_DATA: [
                                                {
                                                    key: "1",
                                                    item: "Sugical Mask",
                                                    price: "2",
                                                    url: require('../../assets/surgicalMask.png'),
                                                    impactText: "Surgical Masks",
                                                    impact: Math.floor(oneper / 2)
                                                },
                                                {
                                                    key: "2",
                                                    item: "N95 Mask",
                                                    price: "10",
                                                    url: require('../../assets/n95Mask.png'),
                                                    impactText: "N95 Masks",
                                                    impact: Math.floor(oneper / 10)
                                                },
                                                {
                                                    key: "3",
                                                    item: "Face Shield",
                                                    price: "50",
                                                    url: require('../../assets/shield.png'),
                                                    impactText: "Face Shields",
                                                    impact: Math.floor(oneper / 50)
                                                },
                                                {
                                                    key: "4",
                                                    item: "Sanitizer(500ml)",
                                                    price: "155",
                                                    url: require('../../assets/sanitizer.png'),
                                                    impactText: "Bottles",
                                                    impact: Math.floor(oneper / 155)
                                                }
                                            ],
                                            causeType: "Covid-19"
                                        }
                                    )}
                                    style={styles.itemView}>
                                    <CauseItem title="Covid-19" iconName="shield-plus" />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('CauseDetail',
                                        {
                                            INTRO_DATA: [
                                                {
                                                    key: "1",
                                                    item: "Living Expense",
                                                    price: "1000",
                                                    url: require('../../assets/elderly.png'),
                                                    impactText: "Person's Expense",
                                                    impact: Math.floor(oneper / 1000)
                                                },
                                            ],
                                            causeType: "Old Age"
                                        }
                                    )}
                                    style={styles.itemView}>
                                    <CauseItem title="Old Age" iconName="heart-plus" />
                                </TouchableOpacity>
                            </View>
                        </>
                        :
                        <SafeAreaView style={styles.Topcontainer}>
                            <Start1Per amount={oneper} setGoal={setGoal} name={userName} />
                        </SafeAreaView>
                    }
                </>
            }
        </>




    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 30,
        flex: 1,
        // justifyContent: "center"
    },
    itemView: {
        // marginLeft: "5%",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: "5%",
    },
    Topcontainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activity: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})