import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Add({items,setItems}) {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')

    const save = () => {
        const newPerson = {
            id: items.length + 1,
            lastname: lastname,
            firstname: firstname
        }
        const tempItems = [...items, newPerson]
        setItems(tempItems)
        setFirstname('')
        setLastname('')
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={firstname}
                onChangeText={text => setFirstname(text)}
                placeholder='Firstname...'
            />
            <TextInput
                style={styles.input}
                value={lastname}
                onChangeText={text => setLastname(text)}
                placeholder='Lastname...'
            />
            <Button title='Save' onPress={save} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    input: {
        borderColor: '#333',
        borderWidth: 1,
        padding: 8,
        minWidth: '35%'
    }
})