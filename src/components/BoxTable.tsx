import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ContexProvider, arr, globalContext } from "../context/GlobalContext";

type PropsType = {
   value: string,
   indexPos: number
}

export const BoxTable = (props: PropsType) => {
  const Context = useContext(globalContext);
  const [Value, setValue] = useState(Context?.ValueBox);

  useEffect(() => {
    setValue("");
    Context?.setClear(false);
  }, [Context?.Clear, arr]);

  return (
    <TouchableOpacity
      onPress={async () => {
        if (Value == "") {
          setValue(await Context?.turn(props.indexPos));
        }else{
          Alert.alert("Alerta", "Digita en otro lao' que aquí no se puede XD")
        }
      }}
      style={styles.BoxStyle}
    >
      <Text style={{ color: "black" }}>{arr[props.indexPos]}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BoxStyle: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: .7
  },
});
