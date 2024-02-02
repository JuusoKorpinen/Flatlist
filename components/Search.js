import React, { useState } from "react";
import { TextInput, View, StyleSheet} from "react-native";

export default function Search({ executeSearch }) {
    const [search, setSearch] = useState('')

    return (
        <View style={styles.searchBox}>
            <TextInput
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder="Search..."
                returnKeyType="search"
                onSubmitEditing={() => executeSearch(search)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        marginBottom: 24,
        borderColor: '#333',
        borderWidth: 1,
        padding: 8
    }
})