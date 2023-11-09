/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import {  StyleSheet, Text, View,TouchableOpacity,ScrollView, Alert } from 'react-native';
import Task from './componants/Task';
import styles from './App.component.style';
import Form from './componants/Form';
const App = () => {
  const [Tasklist,setTasklist] = useState([])
  const handleAddTask =(Task) =>{
    setTasklist([...Tasklist,Task])
  }
  const hanldeDeleteTask=(index)=>{
    Alert.alert('Thông báo!!!', 'Bạn có chắc chắn muốn xóa', [
      {
        text: 'OK',
        onPress: () => {
          let TasklistTmp=[...Tasklist]
          TasklistTmp.splice(index,1)
          setTasklist(TasklistTmp)
        },
        
      },
      {text: 'Cancel', onPress: () => {}},
    ]);
  }
 return(
  <View style={styles.container}>
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerTolist}>Todo List</Text>
    <ScrollView>
      {
       Tasklist.map((item,index)=>{
        return <Task key={index} title={item} number={index+1} onDeleteTask={()=> hanldeDeleteTask(index)}/>
       })
    }
  

    </ScrollView>
      </View>
    </View>

    <Form onAddTask={handleAddTask} />
 </View>
 )
}

export default App
