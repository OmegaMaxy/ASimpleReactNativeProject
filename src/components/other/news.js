import React, { Component, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  Linking,
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
    fetch(
      "http://newsapi.org/v2/everything?q=" +
        query +
        "&from=" +
        getCurrentDate() +
        "&sortBy=publishedAt&apiKey=4c9b6742c88a42c3bc824bd123f42a4b"
    )
      .then((response) => response.json())
      .then((json) => {
        /*console.log("Data:");
        console.log(json);*/
        console.log(json.totalResults);
        console.log(json.articles);
        this.setState({ data: json.articles });
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
        <Text style={styles.header}>News</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>{item.title}</Text>

                <Image
                  style={styles.image_in_post}
                  fadeDuration={200}
                  source={{
                    width: 200,
                    height: 200,
                    uri: item.urlToImage,
                  }}
                />
              </View>
            )}
          />
        )}
      </View>
    );
  }
}
/*
<Text style={{color: 'blue'}}
                  onPress={() => Linking.openURL( {item.urlToImage} )}>
                  Link to post..
                </Text>
                */
const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderColor: "#f9c2ff",
    borderWidth: 2,
    borderRadius: 16,
    padding: 24,
    margin: 14,
  },
  image_in_post: {
    borderRadius: 16,
  },
  header: {
    fontSize: 22,
    marginLeft: 16,
    fontWeight: "bold",
  },
});
const query = "bitcoin";
const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  //Alert.alert(date + '-' + month + '-' + year);
  // You can turn it in to your desired format
  return date + "-" + month + "-" + year; //format: dd-mm-yyyy;
};
export default Memes;
