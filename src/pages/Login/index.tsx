import React, { useState } from "react";
import { styles } from './style'
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import AxiosInstance from "../../api/AxiosInstance";


const Login =  () => {

  const[email, setEmail] = useState('')
  const[senha, setSenha] = useState('')

  const handleLogin = async () => {
    console.log(`Email: ${email} - Senha: ${senha}`)

    try {
      const retorno = await AxiosInstance.post('/auth/login', {
        email:email, 
        password:senha
      });

      console.log('Retorno: ' + JSON.stringify(retorno))
  
    } catch (error) {
       
      console.log('Erro ao realizar autenticação 2- ' + JSON.stringify(error))
    }
  }


  return(
    <>
      <View style={styles.container}>

        <View style={styles.cabecalho}>
          <Text style={styles.txtLogin}>Bem-vindo!</Text>
        </View>

        <View style={styles.conteudo}>
          <TextInput style={styles.input} placeholder="Digite seu email" onChangeText={setEmail} value={email}></TextInput>
          <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} onChangeText={setSenha} value={senha}></TextInput>
        </View>
          <View style={styles.rodape}>
            <TouchableOpacity style={styles.botao} onPress={() => handleLogin()}/>
              <Text style={styles.txtbotao}>Entrar</Text>
          </View>
      </View>
    </>
  )
};

export default Login;