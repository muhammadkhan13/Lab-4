/**
 * To Do List file
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Pressable,
   View,
   Text,
   ScrollView,
   TextInput,
   Button
 } from 'react-native';

 export default function ToDoList({ tasks }) {
     return(
     <ScrollView>
         <Pressable>
             <View style={[styles.task, styles.completed]}>
                 {tasks.map((task) => {
                     return(
                         <View>
                            <Text style = {styles.taskText}>{task}</Text>
                         </View>
                     );
                 })}
             </View>
         </Pressable>
     </ScrollView>);
 }

 const styles = StyleSheet.create({
      task: {
         padding: 10,
         borderBottomWidth: 1,
         borderColor: '#ccc',
       },
       completed: {
         backgroundColor: '#e0e0e0',
       },
       taskText: {
         fontSize: 16,
       },
   });