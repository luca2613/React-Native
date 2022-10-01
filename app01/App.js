import React from 'react';
import { View, Text, Image} from 'react-native';

function app(){
  return (
    <View style={{margin:50}}>
        <Image source={{uri:'https://static.wikia.nocookie.net/naruto/images/e/e7/Sasuke_epi_319.png/revision/latest?cb=20130629210647&path-prefix=pt-br'}}
        style={{with:200,height:200, margin:50}}/>

        <Text>Dados Pessoais:</Text>
        <Text>Gustavo Arakaki, 20 anos</Text>

        <Text>Formação:</Text>
        <Text>E.E. Marquês de São Vicente, Etec Aristóteles Ferreira, Fatec Rubens Lara</Text>

        <Text>Experiência:</Text>
        <Text>Especialista em redes na prefeitura municipal de São Vicente</Text>

        <Text>Projetos:</Text>
        <Text>Todos os meus projetos estão disponíveis em https://github.com/n3sh-source</Text>
    </View>
  )
}

export default app