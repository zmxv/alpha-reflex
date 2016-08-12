'use strict';

import React from 'react';

import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

var BoardView = require('./boardview.js');

var Main = React.createClass({
  render() {
    return <View style={styles.container}>
             <BoardView/>
           </View>;
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62',
  },
});

module.exports = Main;
