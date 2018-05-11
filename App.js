import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Root } from './stuff/Router';

class App extends Component {
  render() {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', ]);
    return <Root />;
  }
}
export default App;

