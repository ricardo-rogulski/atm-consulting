import React, { Component } from 'react';
import {
  View, StatusBar, Image, Text, StyleSheet
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');


export default class CenaServicos extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor='#19DAC8' />
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19DAC8' />

        <View style={styles.cabecalho}>
          <Image source={detalheServicos} />
          <Text style={styles.txtTitulo}>Nossos serviços</Text>
        </View>

        <View style={styles.detalheServicos}>
          <Text style={styles.txtServicos}>- Consultoria</Text>
          <Text style={styles.txtServicos}>- Processos</Text>
          <Text style={styles.txtServicos}>- Acompanhamento de Projetos</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 25
  },
  detalheServicos: {
    marginTop: 30,
    padding: 20
  },
  txtServicos: {
    fontSize: 18
  }

});
