import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { arr, globalContext } from "../context/GlobalContext";

type PropsType = {
  value: string;
  indexPos: number;
};

export const BoxTable = (props: PropsType) => {
  const Context = useContext(globalContext);
  const [Value, setValue] = useState(Context?.ValueBox);

  useEffect(() => {
    setValue("");
    Context?.setClear(false);
  }, [Context?.Clear, arr]);

  return (
    <TouchableOpacity
      style={styles.BoxStyle}
      onPress={async () => {
        if (Value == "") {
          setValue(await Context?.turn(props.indexPos));
        } else {
          Alert.alert("Alerta", "Digita en otro lao' que aquí no se puede XD");
        }
      }}
    >
      <Text style={Value == "X" ? styles.StyleX : styles.StyleO}>
        {arr[props.indexPos]}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BoxStyle: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 15
  },
  StyleX: {
    fontSize: 30,
    color: "rgba(0, 0, 255, 0.7)",
  },
  StyleO: {
    fontSize: 30,
    color: "rgba(224, 112, 56, 0.9)",
  },
});
