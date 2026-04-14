import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useDispatch } from "react-redux";
import { addCustomer } from "../store/actions";

export default function Customers({ route }) {
  const { region } = route.params;
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const save = () => {
    if (!name || !email || !phone) {
      alert("Fill all fields");
      return;
    }

    dispatch(
      addCustomer({
        id: Date.now().toString(),
        name,
        email,
        phone,
        region,
      })
    );

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Region: {region}</Text>

      <TextInput placeholder="Name" onChangeText={setName} style={{ borderWidth: 1, marginVertical: 5 }} />
      <TextInput placeholder="Email" onChangeText={setEmail} style={{ borderWidth: 1, marginVertical: 5 }} />
      <TextInput placeholder="Phone" onChangeText={setPhone} style={{ borderWidth: 1, marginVertical: 5 }} />

      <Button title="Save Customer" onPress={save} />
    </View>
  );
}