import React from 'react'
import { Text, StyleSheet } from 'react-native'

type PropsType = {
    Text: string,
    colorText: string
}

export default function TextTitle (props: PropsType) {
  return (
        <Text style={styles.defaultStyle}>{props.Text}</Text>
    )
}

const styles = StyleSheet.create({
    defaultStyle: {
        // color: 
    }
})