'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

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
