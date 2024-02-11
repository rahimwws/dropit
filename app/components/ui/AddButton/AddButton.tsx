import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../shared/styles/colors'
import Add from '../../assets/svg/Add'

const AddButton = () => {
  return (
    <TouchableOpacity
    style={{
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: colors.blue,
      alignItems: "center",
      justifyContent: "center",
      position:"absolute",
      bottom:100,
      right:20,
      zIndex:8
    }}
  >
    <Add color={colors.white} />
  </TouchableOpacity>
  )
}

export default AddButton