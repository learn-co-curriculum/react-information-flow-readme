import React, { Component } from 'react'
import { Radio } from 'semantic-ui-react'
import Master from '../assets/master-hog.png'
import BabyHog from './BabyHog'

export default class MasterHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eyeColor: "blue",
      name: "Master Blaster",
      weight: '2.54 Tons',
      offspring: props.offspring
    }
  }

  getRadioButtons = () => (
    ["blue", "sun", "glowing"].map((color, idx) => (
      <div key={idx}>
        <Radio
          toggle
          type="radio"
          name={color}
          value={color}
          checked={this.state.eyeColor === color}
          onChange={() => {this.setState({eyeColor: color})}}>
        </Radio>
        {color}<br></br>
      </div>
    ))
  )


  render() {
    return (
      <div>

        <h2>Name: {this.state.name}</h2>
        <h3>Weight: {this.state.weight}</h3>
        <form>
          {this.getRadioButtons()}
        </form>

        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt='MasterBlaster' style={{height: 200}}></img>
        </div>
        <ul className="hoglist">
          {this.state.offspring.map((el, idx) => <BabyHog key={idx} changeEyes={this.changeEyeColor} {...el} eyeColor={this.state.eyeColor} />)}
        </ul>

      </div>
    )
  }
}
