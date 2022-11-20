import React from "react";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        padding: 0,
        margin: 0,
        flex: 1,
       backgroundColor: '#7054b6'
      },

      cabecalho:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end'
        },
      txtLogin:{
        fontSize: 45,
        fontWeight: 'bold',
        color: '#000'
      },

      conteudo:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
      },
      input:{
         borderWidth: 2,
         borderRadius: 10,
         width:Dimensions.get('window').width*0.8,
         marginVertical: 10,
         paddingHorizontal: 15,
         paddingVertical:13,
         fontWeight:'bold'
      },

      rodape:{
        flex:1,
        alignItems:'center'        
      },
      botao:{
        backgroundColor: '#190152',
        width:Dimensions.get ('window').width*0.8,
        borderRadius:10,
        padding: 20
      },
      txtbotao:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
      }

    
})