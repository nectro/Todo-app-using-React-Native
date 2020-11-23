import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import Task from "./task";

export default class Main extends Component {
  
    state ={
      searchbar : "",
      tasks :[],
    }
  

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <TextInput style={styles.searchBar} value={this.state.searchbar} onChangeText={(val)=>this.setState({searchbar:val,})}></TextInput>
          <TouchableOpacity style={styles.button} onPress={this.addTask.bind(this)}>
            <Text style={{fontSize: 28,color: "blue",}}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskListContainer}>
          <ScrollView style={styles.taskList}>
            
           {
             this.state.tasks.map((val,key)=>{
               if(val.startsWith(this.state.searchbar))
                return <Task key={key} keyval={key} n={val}  deleteTask={ () => this.removeTask(key) }/>
            })
           }
            
          </ScrollView>
        </View>
      </View>
      <StatusBar style="light" backgroundColor="rgba(0,20,100,0.5)"/>
    </View>
  );
  }

  addTask(){
    if(this.state.searchbar != "" && this.state.searchbar != " "){
      this.state.tasks.push(this.state.searchbar);
      this.setState({searchbar:"",tasks : this.state.tasks});
    }
  }

  removeTask(n){
    this.state.tasks.splice(n,1);
    this.setState({searchbar:"",tasks : this.state.tasks,});
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  main: {
    backgroundColor: 'rgba(10,50,255,0.5)',
    height: '100%',
    width: '100%',
    paddingTop: 30,
  },
  header:{
    height: 50,
    flexDirection:"row",
    justifyContent: "center",
  },
  searchBar:{
    marginTop: 5,
    height: 40,
    width: "80%",
    paddingLeft: 10,
    fontSize: 22,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  button:{
    height: 40,
    marginTop: 5,
    marginLeft: "1%",
    width: "12%",
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  taskListContainer:{
    height: "100%",
  },
  taskList:{
    paddingTop: 10,
  },
});
