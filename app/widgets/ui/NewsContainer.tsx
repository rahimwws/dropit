import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import NewsCard from '../../components/ui/Cards/NewsCard'
import gaps from '../../shared/styles/gaps'

const NewsContainer = () => {
  return (
    <ScrollView style = {{
        paddingHorizontal:gaps.pd20,
        marginBottom:90
    }}>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </ScrollView>
  )
}

export default NewsContainer