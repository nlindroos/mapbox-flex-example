import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import config from './config';

MapboxGL.setAccessToken(config.MAPBOX_ACCESS_TOKEN);

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    constructor(props) {
        super(props);

        this.state = {
            showExtra: false,
        };
    }

    render() {
        const infoTexts = (
            <View>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );

        return (
            <View style={styles.container}>
                {infoTexts}
                <MapboxGL.MapView
                    ref={(ref) => { this.map = ref; }}
                    style={{flex: 1, borderWidth: 1, borderColor: 'green'}}
                    // initialZoomLevel={6}
                    centerCoordinate={[24.940637, 60.199159]}
                    styleURL={config.STYLE_URL}
                >
                </MapboxGL.MapView>

                {this.state.showExtra && (
                    <View>
                        {infoTexts}
                        {infoTexts}
                    </View>
                )}

                <TouchableOpacity onPress={() => this.setState({showExtra: !this.state.showExtra})} style={styles.button}>
                    <Text style={styles.welcome}>Show</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: 'grey',

    }
});
