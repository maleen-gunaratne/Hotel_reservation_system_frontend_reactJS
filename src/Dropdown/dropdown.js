import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './dropdown.scss'

class Dropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
            <select className ='hm-select-input'  onChange={this.handleChange}>
              {this.props.options.map( option => (
                  <option>{option.display}</option>
                ))}
            </select>
      );
    }
  }

  Dropdown.propTypes = {
    options : PropTypes.array
  }
  
  Dropdown.defaultProps = {
    options : [],
    onGetSelectedOption: () => {}
  }

  export default Dropdown