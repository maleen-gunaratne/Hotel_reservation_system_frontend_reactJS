import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './inputbox.scss'

class InputBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      inputTextValue: ''
    }
  }

  handleChange = (event) => {
    this.setState({ inputTextValue: event.target.value }, () => {
      this.props.getInputTextValue(this.state.inputTextValue)
    })
  }

  render () {
    return (
      <div className='inputbox-container' aria-label={this.props.label}>
        { (this.props.label != null) &&
          <label htmlFor={this.props.id} className='hr-label'>
            {this.props.label}
          </label>
        }

        <input
          id={this.props.id}
          style={{ width: this.props.width }}
          className={`hr-input-text 
                      ${this.props.isDisabled && 'hr-disabled'}`}
          onChange={event => { this.handleChange(event) }}
          defaultValue={this.state.inputTextValue}
          disabled={this.props.isDisabled}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

InputBox.propTypes = {
  getInputTextValue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  inputTextValidation: PropTypes.func,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
}

InputBox.defaultProps = {
  width: '300px',
  isDisabled: false,
  placeholder: ''
}

export default InputBox
