import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import SunBaby from '../assets/sun-eyes.png'
import BlueBaby from '../assets/blue-eyes.png'
import GlowingBaby from '../assets/glowing-eyes.png'

const imgMapper = {
  'blue': BlueBaby,
  'glowing': GlowingBaby,
  'sun': SunBaby
}

export default class BabyHog extends Component {

  constructor() {
    super()
    this.state = {
      imgHeight: 200
    }
  }

  changeWeight = (event) => {
    event.preventDefault()
    if (event.target.id === 'increase') {
      this.setState({imgHeight: this.state.imgHeight + 10})
    } else {
      this.setState({imgHeight: this.state.imgHeight - 10})
    }
  }

  render() {
    return (

      <li className="hogbabies">

        <h3>{this.props.name}</h3>
        <h5>Hobby: {this.props.hobby}</h5>
        <h5>Eye Color: {this.props.eyeColor}</h5>

        <div className="wrap-crap">
          <Button animated id="increase" onClick={this.changeWeight}>
            <Button.Content id="increase" visible>Increase Weight</Button.Content>
            <Button.Content id="increase" hidden>
              <Icon id="increase" name='plus' />
            </Button.Content>
          </Button>

          <Button animated onClick={this.changeWeight}>
            <Button.Content visible>Decrease Weight</Button.Content>
            <Button.Content hidden>
              <Icon name='minus' />
            </Button.Content>
          </Button>
        </div>

        <img
          src={imgMapper[this.props.eyeColor]}
          style={{height: `${this.state.imgHeight}px`}}
          alt="MasterBlasterJr"
        />

      </li>
    )
  }
}
