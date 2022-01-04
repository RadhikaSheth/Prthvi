
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import WebView from "react-native-webview";

export default function CompleteConsent({ navigation, route }) {
  const webviewRef = useRef(null);
  const redirect_url = "http://484c-103-250-137-194.ngrok.io/redirect/";

  const onNavigation = (navState) => {

    if (navState.url === redirect_url) {
      navigation.navigate("CustomBottomNav");
    }
  };

  return (
    <WebView
      source={{
        uri: route.params.param,
      }}
      startInLoadingState={true}
      renderLoading={() => (
        <ActivityIndicator
          color="black"
          size="large"
          style={styles.flexContainer}
        />
      )}
      ref={webviewRef}
      onNavigationStateChange={onNavigation}
      style={styles.margin}
    />
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  margin: {
    marginTop: 50,
  },
});
