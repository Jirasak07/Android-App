import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RequestMe = () => {
  return (
    <View style={styles.container}>
      <Text>RequestMe</Text>
    </View>
  )
}

export default RequestMe

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
},
})