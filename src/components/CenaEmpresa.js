import React, { Component } from 'react';
import {
  View, StatusBar, Image, Text, StyleSheet
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');


export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor='#EC7148' />
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148' />

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtEmpresa}>A ATM consultoria é uma empresa especializada
          em desenvolvimento de apps para Android e IOS, com mais de 1 mês de experiência
          e 0 projetos no setor</Text>
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
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25
  },
  detalheEmpresa: {
    marginTop: 30,
    padding: 20
  },
  txtEmpresa: {
    fontSize: 18
  }

});
