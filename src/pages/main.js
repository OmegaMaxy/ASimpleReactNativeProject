import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

import Header from "./src/components/required/header.js";
import Footer from "./src/components/required/footer.js";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <View style={{ flex: 1 }}>
    <Header></Header>
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </ScrollView>
    <Footer></Footer>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    borderRadius: 10,
    padding: 25,
    marginVertical: 18,
  },
  header: {
    fontSize: 32,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  footer: {
    backgroundColor: "#f9c2ff",
    padding: 18,
  },
  footer_text: {
    fontSize: 16,
  },
});

export default App;
