import React, { Component, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";

class Memes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("https://www.reddit.com/r/meme/random/.json")
      .then((response) => response.json())
      .then((json) => {
        /*console.log("Data:");
        console.log(json);*/
        console.log(json[0].data.children[0].data);
        this.setState({ data: json[0].data.children[0].data });
        /*console.log("URL:");
        console.log(json[0].data.children[0].data.url);*/
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "dodgerblue",
    padding: 24,
    margin: 14,
  },
});
export default Memes;
