import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Roulette from "react-native-casino-roulette";
import wheel from "./assets/images/wheel.png";
import marker from "./assets/images/marker.png";

//Roulette numbers
const numbers = ["חואן", "לידור", "דיזי", "חואן", "תתאפק", "לידור"];
const options = numbers.map((o) => ({ index: o }));
const customOptions = numbers.map((o) => <Text index={o}>{o}</Text>);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onRotate = this.onRotate.bind(this);
    this.onRotateChange = this.onRotateChange.bind(this);
    this.onRotateCustom = this.onRotateCustom.bind(this);
    this.onRotateCustomChange = this.onRotateCustomChange.bind(this);
    this.state = {
      option: "Option selected:",
      optionCustom: "Option selected:",
      rouletteState: "stop",
      rouletteCustomState: "stop",
    };
  }

  render() {
    const { rouletteState } = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 50, margin: 10, color: "dimgray" }}>
          Nandos
        </Text>

        <Roulette
          enableUserRotate={rouletteState == "stop"}
          background={wheel}
          onRotate={this.onRotate}
          onRotateChange={this.onRotateChange}
          marker={marker}
          options={options}
          rotateEachElement={(index) =>
            ((index * 360) / options.length) * -1 - 90
          }
          markerWidth={20}
        ></Roulette>
      </View>
    );
  }

  onRotateChange(state) {
    this.setState({
      rouletteState: state,
    });
  }

  onRotate(option) {
    this.setState({
      option: option.index,
    });
  }

  onRotateCustomChange(state) {
    this.setState({
      rouletteCustomState: state,
    });
  }

  onRotateCustom(option) {
    this.setState({
      optionCustom: option.props.index,
    });
  }
}
