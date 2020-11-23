import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, CheckBox } from 'react-native';


export default class Task extends Component {

    constructor(props){
        super(props);
        this.state={
          check:false,
          key:this.props.keyval,
        }
      }
    
    
      checkBox(){
        this.setState({
          check:!this.state.check,
        })
      }

  render(){
  return (
    
    <View key={this.props.keyval} style={styles.taskContainer}>
      <View style={{width:"93%",flexDirection:"row",}}>
        <View style={styles.task}>
        <CheckBox value={this.state.check} onChange={()=>this.checkBox()}></CheckBox>
        <Text style={{fontSize:22,}}>{this.props.n}</Text>
        </View>
        <View key={this.props.keyval} style={styles.taskDelete}>
        <TouchableOpacity  onPress={this.props.deleteTask} ><Text style={{fontSize:28,color:"rgba(255,0,0,1)",}}>X</Text></TouchableOpacity>    
        </View>
      </View>   
    </View>
   );
  }
}

const styles = StyleSheet.create({
    taskContainer:{
        height:50,
        marginBottom: 5,
        justifyContent:"center",
        alignItems: "center",
      },
      task:{
        height:50,
        width:"87%",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        flexDirection: "row",
        alignItems:"center",
        backgroundColor: "rgba(255,255,255,0.8)"
      },
      taskDelete:{
        height:50,
        width:"13%",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "rgba(255,255,255,0.8)"
      },

});
