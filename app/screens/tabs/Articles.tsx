 import { View, Text } from 'react-native'
 import React from 'react'
import ArticleCard from '../../components/ui/Cards/ArticleCard'
 
 const Articles = () => {
   return (
     <View style = {{flex:1,marginLeft:5}}>
       <ArticleCard/>
       <ArticleCard/>
     </View>
   )
 }
 
 export default Articles