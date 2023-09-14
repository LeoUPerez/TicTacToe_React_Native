import { Button, StyleSheet, Text, View } from "react-native";
import { BoxTable } from "../components/BoxTable";
import { useContext, useEffect, useState } from "react";
import { arr, globalContext } from "../context/GlobalContext";

export default function HomeView() {
  const [index, setindex] = useState(0);

  const Context = useContext(globalContext);
  return (
    <View style={styles.container}>
      <Text>Turno: {Context?.turnBox ? "X" : "O"}</Text>
      <View style={styles.table}>
        {arr.map((element, index) => (
          <BoxTable
            key={index}
            indexPos={index}
            value={element}
          ></BoxTable>
        ))}
        <Button
          title="Reset"
          onPress={() => {
            Context?.setClear(true);
            Context?.clear();
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    width: 350,
    height: 350,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    gap: 5,
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});
