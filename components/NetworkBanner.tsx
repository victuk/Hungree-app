import { View, Text } from 'react-native'
import React from 'react'

export default function NetworkBanner() {
  return (
    <View style={{height: 20, backgroundColor: "black"}}>
      <Text style={{textAlign: "center", color: "white", fontWeight: "bold"}}>You are not connected to the internet</Text>
    </View>
  )
}