import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'


const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens']

const ScrollableFlatListComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending Now")
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.container}>
        

        <FlatList 
        data={categories} 
        renderItem={({ item })=>(
          <Category item={item} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}/>)} 
        keyExtractor={(item) => item} 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}/>
        
        
        {/* <Category/> */}
    </LinearGradient>
  )
}

const Category = ({item, selectedCategory, setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text 
        style={[
            styles.categoryText, 
            selectedCategory===item && {
                color:"#FFFFFF", 
                backgroundColor:"#E96E6E"
                }
            ]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default ScrollableFlatListComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    categoryText:{
      fontSize: 16,
      fontWeight: '600',
      color: '#938F8F',
      backgroundColor: '#DFDCDC',
      textAlign: 'center',
      borderRadius: 16,
      marginHorizontal: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
  },
})