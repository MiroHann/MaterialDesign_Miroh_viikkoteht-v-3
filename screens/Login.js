import {StyleSheet, View } from 'react-native';
import { Button, TextInput  } from 'react-native-paper';
import MainAppBar from "../components/MainAppBar"
import { useState } from 'react';
export default function Login(){
    const [formdata, setformdata] = useState({username: '', password: ''})
  const [showError, setShowError] = useState(false)
  const validateAndSubmit = () => {
    setShowError(true);
    if(formdata.username.length > 0 && formdata.password.length > 8){
      setformdata({username: '', password: ''})
      setShowError(false)
    }
  }
    return (
    <>
      <MainAppBar title="Login"/>
      <View style={styles.container}>
      <TextInput label="Username" style={styles.input_field} value={formdata.username} onChangeText={text => setformdata({...formdata,username:text})} error={formdata.username.length===0 && showError}></TextInput>
      <TextInput label="Password" keyboardType='visible-password' style={styles.input_field}value={formdata.password} onChangeText={text => setformdata({...formdata,password:text})} error={formdata.password.length < 8 && showError}error={formdata.password.length < 8 && showError}></TextInput>
      <Button mode="contained" style={styles.button} onPress={validateAndSubmit}>Submit</Button>
      </View>
      </>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input_field: {
    backgroundColor: '#fcfcfc',
    margin: (16,8,16,8),
  },
  button: {
    width:100,
    margin:(16,8,0,8),
  }
});