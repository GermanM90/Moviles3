import { View, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper";
export function Formulario () {
    return (
        
<View style={styles.container}>
        <TextInput
        label="Identificacion"
        
        ></TextInput>
  
        <TextInput
        label="Nombre"
        ></TextInput>
  
        <TextInput
        label="Asignatura"
        ></TextInput>
  
        <TextInput
        label="Nota1"
        ></TextInput>
  
        <TextInput
        label="Nota2"
        ></TextInput>
  
        <TextInput
        label="Nota3"
        ></TextInput>
        
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });