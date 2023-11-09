import { View, Text,TextInput, TouchableOpacity, Alert,Keyboard } from 'react-native'
import React, { useState }from 'react'
import styles from './style.js'
import asds from './asds.js'
const Form = (props) => {
    const [Task,setTask] = useState('')
    const handleAddTask = () =>{
        if(Task.length===0){
            alert('Bạn vui lòng nhập công việc')
            return false
        }
        props.onAddTask(Task);
        setTask('')
        Keyboard.dismiss();

    }
  return (
    <View style={styles.addTask}>
        <TextInput
        value={Task}
        onChangeText={(text) => setTask(text)}
        placeholder='Your Task' style={styles.input}
        ></TextInput>
       <TouchableOpacity 
       onPress={handleAddTask} 
       >
       <View style={styles.inputCricle}>
            <Text style={styles.icon}>+</Text>
        </View>
       </TouchableOpacity>
    </View>
  )
}

export default Form;