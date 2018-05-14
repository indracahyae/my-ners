import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Root as RootNativeBase } from 'native-base';
import { Root } from './stuff/Router';

class App extends Component {
  render() {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', ]);
    return (
      <RootNativeBase>
        <Root/>
      </RootNativeBase>
    );
  }
}
export default App;

