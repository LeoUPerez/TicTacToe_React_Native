import React, {useContext, useEffect, useState} from "react";
import {arr, globalContext} from "../../context/GlobalContext";
import {Alert, Text, TouchableOpacity} from "react-native";
import {styles} from "./style";

interface PropsType {
    value: string;
    indexPos: number;
}

export default function BoxTable(props: PropsType) {
    const Context = useContext(globalContext);
    const [Value, setValue] = useState(Context.ValueBox);

    useEffect(() => {
        setValue("");
        Context.setClear(false);
    }, [Context.Clear, arr]);

    return (
        <TouchableOpacity
            style={styles.BoxStyle}
            onPress={() => Value == "" ? setValue(Context.Turn(props.indexPos)) : Alert.alert("Alert", "This box is already filled")}
        >
            <Text style={Value == "X" ? styles.StyleX : styles.StyleO}>
                {arr[props.indexPos]}
            </Text>
        </TouchableOpacity>
    );
};