/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
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
import ToDoList from "./ToDoList.jsx";
import ToDoForm from "./ToDoForm.jsx";


function App() {
    let [tasks, setTasks] = useState([
            "Do laundry",
            "Go to gym",
            "Walk dog"
        ]);

    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
        };

  return (
    <SafeAreaView>
      <ToDoList tasks = {tasks} />
      <ToDoForm addTask = { addTask }/>
    </SafeAreaView>
  );
}

export default App;
