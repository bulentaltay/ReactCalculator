import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Button from './App/components/Button';
import calculator, { initialState } from "./App/util/calculator";
import { useState, useEffect } from 'react';

export default function App() {

  const [state, setState] = useState({ currentValue: '0', operator: null, previousValue: null })

  handleTap = (type, value) => {
    // console.log(`current value ${state.currentValue}, operator ${state.operator}, previousValue ${state.previousValue}`)
    setState(calculator(type, value, state))

  };

  useEffect(() => {
    // console.log(`new state current value ${state.currentValue}, operator ${state.operator}, previousValue ${state.previousValue}`)
  }, [state])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>{state.currentValue}</Text>
        <View style={styles.numbersRow}>
          <Button text={'C'} onPress={() => this.handleTap('clear')}></Button>
          <Button text={'=-'} onPress={() => this.handleTap('posneg')}></Button>
          <Button text={'%'} onPress={() => this.handleTap('percentage')}></Button>
          <Button text={'/'} theme={'accent'} onPress={() => this.handleTap('operator', '/')}></Button>
        </View>
        <View style={styles.numbersRow}>
          <Button text={'7'} onPress={() => this.handleTap('number', '7')}></Button>
          <Button text={'8'} onPress={() => this.handleTap('number', '8')}></Button>
          <Button text={'9'} onPress={() => this.handleTap('number', '9')}></Button>
          <Button text={'x'} theme={'accent'} onPress={() => this.handleTap('operator', '*')}></Button>
        </View>
        <View style={styles.numbersRow}>
          <Button text={'4'} onPress={() => this.handleTap('number', '4')}></Button>
          <Button text={'5'} onPress={() => this.handleTap('number', '5')}></Button>
          <Button text={'6'} onPress={() => this.handleTap('number', '6')}></Button>
          <Button text={'-'} theme={'accent'} onPress={() => this.handleTap('operator', '-')}></Button>
        </View>
        <View style={styles.numbersRow}>
          <Button text={'1'} onPress={() => this.handleTap('number', '1')}></Button>
          <Button text={'2'} onPress={() => this.handleTap('number', '2')}></Button>
          <Button text={'3'} onPress={() => this.handleTap('number', '3')}></Button>
          <Button text={'+'} theme={'accent'} onPress={() => this.handleTap('operator', '+')}></Button>
        </View>
        <View style={styles.numbersRow}>
          <Button text={'0'} size={'double'} onPress={() => this.handleTap('number', '0')}></Button>
          <Button text={'.'} onPress={() => this.handleTap('number', '.')}></Button>
          <Button text={'='} theme={'accent'} onPress={() => this.handleTap('equal')}></Button>
        </View>
      </SafeAreaView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  numbersRow: {
    flexDirection: 'row'
  },
  value: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 80,
    marginRight: 20,
    marginBottom: 10
  }
});
