import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import Add from './components/Add';

export default function App() {
  const [items, setItems] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  useEffect(() => {
    setItems(DATA)
  }, [])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search))
    setItems(searchArray)
  }

  const select = (id) => {
    setSelectedId(id)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch}/>
      <Add items={items} setItems={setItems} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem = {({item}) => (
          <Row person={item} selectedId={selectedId} select={select} />
        )}
      ></FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 32
  },
});
