import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export class Transaction extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image
            source={require('../assets/transaksi.png')}
            style={styles.headerIcon}
          />
          <Text style={styles.headerText}>Transaksi</Text>
        </View>
        <ScrollView>
          <Text> Transaksi </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4EC5F1',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  headerIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
});

export default Transaction;
