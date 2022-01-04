import React, { useState } from "react";
import { Text, TextInput, SafeAreaView, Button, View, TouchableOpacity, Image } from 'react-native'
import { ActivityIndicator } from "react-native";
import { numberValidator } from "./helpers/numberValidator";
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import axios from 'react-native-axios';
export default function InitConsent({ navigation }) {
    const [number, setNumber] = useState({ value: "", error: "" });
    const [isLoading, setLoading] = useState(false);

    const getURL = async () => {
        setLoading(true);
        const numberError = numberValidator(number.value);

        if (numberError) {
            setNumber({ ...number, error: numberError });
            setLoading(false);
        } else {
            try {
                axios.post("http://484c-103-250-137-194.ngrok.io/consent", {
                    "mobile": number.value
                })
                    .then(function (response) {
                        response = response.data
                        navigation.navigate("CompleteConsent", { param: response });
                    })
                // const response = await fetch("http://127.0.0.1:8000/api/consent/");
                // const json = await response.text();

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <View style={styles.screen}>
            <Image
                source={require("../../assets/prthvi_text.png")}
                style={{ width: 200 }}
            />
            <View style={styles.textView}>
                <Text style={styles.mainText}>Let us help you get started with this journey of socially responsible wealth management.{'\n'}{'\n'}First we'll need to understand your financial situation to set goals which are affordable to you and can help solve the most pressing problems of the world </Text>

            </View>
            <View style={styles.bottom}>
                <Text style={styles.text}>Enter your mobile number</Text>
                <TextInput
                    style={styles.input}
                    returnKeyType="next"
                    value={number.value}
                    onChangeText={(text) => setNumber({ value: text, error: "" })}
                    error={!!number.error}
                    errorText={number.error}
                    keyboardType="number-pad"

                />
                <TouchableOpacity style={styles.button} onPress={getURL}>
                    <Text style={{ color: "white" }}>Provide Access</Text>
                </TouchableOpacity>
            </View>

            {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#FFAE42',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    title: {
        fontSize: 37,
        color: '#003153',

    },
    text: {
        color: '#FFF8E5',
        // paddingTop: 70,
        paddingBottom: 10
    },
    input: {
        backgroundColor: '#FFF8E5',
        padding: 10,
        paddingLeft: 20,
        borderRadius: 30,
        width: '90%'
    },
    button: {
        padding: 15,
        marginTop: 5,
        borderRadius: 30,
        alignItems: 'center',
        width: '90%',
        backgroundColor: 'black',
        color: 'white'
    },
    textView: {
        width: "80%",

    },
    mainText: {
        fontSize: 16,
        color: "black",
        textAlign: "justify"
    },
    bottom:{
        width:"100%",
        alignItems:"center"
    }

});

