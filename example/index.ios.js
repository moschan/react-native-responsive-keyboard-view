/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

// import ResponsiveKeyboardView from './index.js'
import ResponsiveKeyboardView from 'react-native-responsive-keyboard-view'

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} = React;

var ResponsiveKeyboardViewExample = React.createClass({
  render: function() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        horizontal={false}
        >
        <ResponsiveKeyboardView style={styles.container}>
          <Text style={styles.welcome}>ResponsiveKeyboardViewExample</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <TextInput style={{height:40, borderColor: 'red', borderWidth: 1,}} />
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <TextInput style={{height:40, borderColor: 'blue', borderWidth: 1,}} />
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <Text style={styles.instructions}>Ipsum veritatis rem ad iste facere aliquam exercitationem distinctio. Voluptates quaerat est quibusdam et unde totam. Porro quasi cupiditate voluptatibus dignissimos distinctio dolore. Rem numquam fugiat consequatur id est voluptatem!</Text>
          <TextInput style={{height:40, borderColor: 'green', borderWidth: 1,}} />
        </ResponsiveKeyboardView>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
});

AppRegistry.registerComponent('ResponsiveKeyboardViewExample', () => ResponsiveKeyboardViewExample);
