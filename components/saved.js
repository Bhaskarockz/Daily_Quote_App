import React, { Component,useState, useEffect } from 'react'
import { Text, View,ScrollView,StyleSheet,FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Saved() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const dataArray = [];
  
        for (const key of keys) {
          const storedData = await AsyncStorage.getItem(key);
  
          if (storedData !== null) {
            const parsedData = JSON.parse(storedData);
            if(parsedData.fav){
            dataArray.push({ id: key, ...parsedData });
            }
          }
        }
  
        // Update the data state with the compiled array
        setData(dataArray);
      } catch (error) {
        console.error('Error reading data from AsyncStorage:', error);
      }
    };
  
    fetchData();
  }, []);
  
    return (
      <View style={styles.container}>
        <View style={styles.container}>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (

        <View style={styles.item}>
        <Text style={{fontSize:20}}>{JSON.stringify(item.content)}</Text>
        <Text style={{fontSize:12,textAlign:'right'}}>{JSON.stringify(item.author)}</Text>
      </View>
      )}
    />
  </View>
      
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
});
