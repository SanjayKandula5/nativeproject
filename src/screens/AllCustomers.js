import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

export default function AllCustomers() {
  const customers = useSelector((state) => state.customers);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 15, backgroundColor: "#eee", marginVertical: 5 }}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Region: {item.region}</Text>
          </View>
        )}
      />
    </View>
  );
}