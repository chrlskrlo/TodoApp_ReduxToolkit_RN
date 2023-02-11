import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TodoHeader = () => {
  const [todo, setTodo] = useState('');
  return (
    <View>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
      }} >Todo List</Text>

      <View 
      style={{
        justifyContent:'center',
        alignItems:'center'}}>
        <TextInput style={{
          borderColor: 'grey',
          borderWidth: 1,
          padding: 10,
          margin: 10,
          width: '80%',
          borderRadius: 5
        }}
          placeholder='Add todo'
          onChangeText={setTodo}
          value={todo}
        />
        <TouchableOpacity 
        style={{
          backgroundColor:'black',
          padding:10,
          margin:10,
          width:'80%',
          borderRadius:5,
          alignItems:'center'
        }}
        onPress={() => setTodo('')}>
          <Text style={{color: 'white'}}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TodoHeader

const styles = StyleSheet.create({})