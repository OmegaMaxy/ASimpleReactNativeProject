import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Footer extends Component {
  state = {};

  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footer_text}>Footer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f9c2ff",
    padding: 18,
  },
  footer_text: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default Footer;
