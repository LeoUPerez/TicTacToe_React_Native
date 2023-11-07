import {StyleSheet, Text, View} from "react-native";
import {useContext} from "react";
import {arr, globalContext} from "../../context/GlobalContext";
import {styles} from "./style";
import CircleDecoration from "../../components/CircleDecoration";
import TextTitle from "../../components/TextTitle";
import BoxTable from "../../components/BoxTable";

export default function Home() {
    const Context = useContext(globalContext);

    return (
        <View style={styles.container}>
            <TextTitle/>
            <CircleDecoration/>
            <Text style={{fontWeight: "bold", fontSize: 17}}>
                Current Player:
                <Text
                    style={
                        Context.turnBox
                            ? styles.turnX
                            : styles.turnO
                    }
                >
                    {Context.turnBox ? " X" : " O"}
                </Text>
            </Text>
            <View style={styles.table}>
                {arr.map((element, index) => (
                    <BoxTable key={index} indexPos={index} value={element}/>
                ))}
            </View>
        </View>
    );
}
