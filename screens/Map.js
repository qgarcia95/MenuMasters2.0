import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setConnected(true);
MapboxGL.setAccessToken('pk.eyJ1IjoibGUxMWV2YW4iLCJhIjoiY2wxdnBvZGY5MWk3bTNsb2Z2aTE3cTRibyJ9.Mp2IDrPcjvLaVrD5-oseOA');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
});

export default class App extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  }
}