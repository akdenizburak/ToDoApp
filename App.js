import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {

    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const complateTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  


  return (
    <View style={styles.container}>


      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Bugün Yapılacaklar</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => complateTask(index)}>
                  <Task key={index} text={item} />

                </TouchableOpacity>
              )

            })
          }
        </View>
      </View>



      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "width" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Bir görev yaz..."} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text styles={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',

  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    padding: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 30,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "75%",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {

  },
});
