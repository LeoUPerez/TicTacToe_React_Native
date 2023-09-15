import { StyleSheet, Text, View } from "react-native";
import { BoxTable } from "../components/BoxTable";
import { useContext } from "react";
import { arr, globalContext } from "../context/GlobalContext";
import TextTitle from "../components/TextTitle";

export default function HomeView() {
  const Context = useContext(globalContext);
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection:"row", gap: 5 }}>
        {/* <TextTitle Text="Tic" />
        <TextTitle Text="Tac" />
        <TextTitle Text="Toe" /> */}
      </View>
      <View
        style={{
          width: 175,
          height: 175,
          backgroundColor: "rgba(0, 0, 255, 0.1)",
          position: "absolute",
          top: "8%",
          right: "-8%",
          borderRadius: 100,
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>
        Current Player:{" "}
        <Text
          style={
            Context?.turnBox
              ? { color: "rgba(0, 0, 255, 0.7)" }
              : { color: "rgba(224, 112, 56, 0.9)" }
          }
        >
          {Context?.turnBox ? "X" : "O"}
        </Text>
      </Text>
      <View style={styles.table}>
        {arr.map((element, index) => (
          <BoxTable key={index} indexPos={index} value={element}></BoxTable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#e1bdfb",
    alignItems: "center",
  },
  table: {
    width: 350,
    height: 330,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    gap: 7,
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});
