import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import styles from "./app.scss";

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText:!previousState.isShowingText }
      ))
    ), 1000);
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
    return (
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <Text className={[styles.bigBlue, this.state.isShowingText ? styles.show : null]} >Open up App.js to start working on your app</Text>
            <Text style={styles.red}>안드로이드폰으로 리액트 네이티브 프로젝트</Text>
            <Image source={pic} style={{width: 193, height: 110}}/>
            <Greeting name='Jaina' />
          </View>
          <View style={{flex: 1, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });