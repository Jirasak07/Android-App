import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import globalStyles from "../Style/globalStyle";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View style={[globalStyles.containerContent, { flex: 1 }]}>
      <Searchbar placeholder="Search" value={searchQuery} />
      <ScrollView>
        <Text>SearchBar</Text>
      </ScrollView>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
