import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Header extends Component {
  state = {};

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.header_text}>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f9c2ff",
    padding: 18,
  },
  header_text: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default Header;
