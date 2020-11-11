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
import Footer from "./src/components/required/footer_nav.js";
import Memes from "./src/components/other/memes.js";
import News from "./src/components/other/news.js";
import Music from "./src/components/other/music.js";

const App = () => (
  <View style={{ flex: 1 }}>
    <Header></Header>
    <ScrollView>
      <News></News>
    </ScrollView>
    <Footer></Footer>
  </View>
);

export default App;
