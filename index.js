'use strict'

var React = require('react-native')
var {
  View,
  DeviceEventEmitter,
  Animated,
} = React

export default class ResponsiveKeyboardView extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      bottom: new Animated.Value(0),
      viewHeight: 0,
      isKeyboardOpen: false,
    }
  }
  componentDidMount() {
    DeviceEventEmitter.addListener('keyboardWillShow', (e) => {this._makeSpace(e)}),
    DeviceEventEmitter.addListener('keyboardWillHide', (e) => {this._removeSpace(e)})
  }
  _makeSpace(e) {
    this.setState({isKeyboardOpen: true})
    Animated.timing(this.state.bottom, {
      toValue: e.endCoordinates.height,
      duration: e.duration,
    }).start()
  }
  _removeSpace(e) {
    this.setState({isKeyboardOpen: false})
    Animated.timing(this.state.bottom, {
      toValue: 0,
      duration: e.duration
    }).start()
  }
  render() {
    return (
      <View style={{ height: this.state.viewHeight }}>
        <Animated.View {...this.props}
          onLayout={(e) => {
            var {x, y, width, height} = e.nativeEvent.layout
            this.setState({viewHeight:height})
          }}
          style={[
            this.props.style,
            {
              bottom: this.state.bottom,
              position: this.state.isKeyboardOpen ? 'absolute' : 'relative',
              left: 0, right:0,
            }
          ]} >
          {this.props.children}
        </Animated.View>
      </View>
    )
  }
}
