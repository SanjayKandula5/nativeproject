// import { View, Text, TouchableOpacity, FlatList } from "react-native";

// function Regions({ navigation }) {
//   const regions = [
//     { id: "1", title: "East" },
//     { id: "2", title: "West" },
//     { id: "3", title: "North" },
//     { id: "4", title: "South" },
//   ];

//   const regionsArray = ({ item }) => {
//     return (
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate("customer", { region: item.title })
//         }
//         style={{
//           padding: 15,
//           backgroundColor: "white",
//           marginVertical: 5,
//         }}
//       >
//         <Text>{item.title}</Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <Text style={{ fontSize: 20 }}>Select a Region:</Text>

//       <FlatList
//         data={regions}
//         renderItem={regionsArray}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }

// export default Regions;


import { View, Text, TouchableOpacity, FlatList } from "react-native";

function Regions({ navigation }) {
  const regions = [
    { id: "1", title: "East" },
    { id: "2", title: "West" },
    { id: "3", title: "North" },
    { id: "4", title: "South" },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("allCustomers")}
        style={{ padding: 15, backgroundColor: "#ddd", marginBottom: 10 }}
      >
        <Text>View All Customers</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 18 }}>Select Region</Text>

      <FlatList
        data={regions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("customer", { region: item.title })
            }
            style={{
              padding: 15,
              backgroundColor: "#fff",
              marginVertical: 5,
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Regions;