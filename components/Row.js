import React from "react";
import { Pressable, Text, StyleSheet} from "react-native";

export default function Row({ person, selectedId, select }) {
    const backgroundColor = person.id === selectedId ? '#c0c0c0': '#f5f5f5'

    return (
        <Pressable onPress={() => select(person.id)}>
            <Text style={[styles.row,{backgroundColor}]}>{person.lastname}, {person.firstname}</Text>
        </Pressable>
    )
}

styles = StyleSheet.create({
    row: {
        minWidth: '90%'
    }
})