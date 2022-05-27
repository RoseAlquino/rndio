import React from "react";
import {
    View,
    Image ,
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const ImageProfileGithub = 'https://avatars.githubusercontent.com/u/67985860?v=4';
const urlToMyGithub = 'https://github.com/RoseAlquino';

const App = ()=> {

  const handlePressGoToGithub = async ()=> {
      console.log('Verificando Link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
        console.log('Link Aprovado');
        console.log('Abrindo o Link......');
        await Linking.openURL(urlToMyGithub);
    }
  }    
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
              <Image accessibilityLabel="Rose no carro"
              style={style.avatar}
              source={{uri: ImageProfileGithub}}/> 
              <Text accessibilityLabel="Nome: Rose Alquino" style={[style.defaultText, style.name]}>Rose Alquino</Text>   
              <Text accessibilityLabel="Nickname: Rose Alquino" style={[style.defaultText, style.nickname]}>rosealquino</Text>   
              <Text accessibilityLabel="Descrição: “Não tenho nenhum talento especial, sou apenas apaixonadamente curiosa.”" style={[style.defaultText, style.description]}>“Não tenho nenhum talento especial, sou apenas apaixonadamente curiosa.”
              </Text>   
              <Pressable onPress={handlePressGoToGithub}>
              <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>  
              </View>
              </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, // Expandir a cor para a tela inteira
        justifyContent: 'center',
    },
    content: {  //colunas
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor:'white',
        borderWidth: 2,
    },
    defaultText:{
        color:colorFontGithub,
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});