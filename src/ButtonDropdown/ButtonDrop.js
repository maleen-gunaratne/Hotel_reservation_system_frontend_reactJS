import React from 'react'
import PropTypes from 'prop-types'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './buttondrop.scss'

class ButtonDrop extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dropdownOpen: false,
      selectedOption: null,
      selectedDisplayValue: this.props.label
    }
    this.optionList = []
  }

  onOptionSelect = event => {
    this.setState({ selectedOption: event.currentTarget.dataset.value }, () => {
      this.props.onGetSelectedOption(this.state.selectedOption)
      this.setState({ selectedDisplayValue: this.state.selectedOption })
    })
  };

  menuTrigger = () => {
    this.setState(
      currentState => ({
        dropdownOpen: !currentState.dropdownOpen
      }), () => {
        document.addEventListener('click', this.handleClickOutside)
      }
    )
  };

  handleClickOutside = () => {
    this.setState({ dropdownOpen: false }, () => {
      document.removeEventListener('click', this.handleClickOutside)
    })
  }

  render () {
    return (
      <div>
        <div
          className='ls-dropdown-container'
          id={this.props.id}
          aria-expanded={this.state.dropdownOpen}
        >
          <div>
            {(this.props.triggerType === 'button' ||
              this.props.triggerType === 'box') && (
              <button
                className={
                  this.props.triggerType === 'button'
                    ? `ls-dropdown-btn ${this.props.buttonType} ${this.props.buttonSize}`
                    : 'ls-dropdown-box'
                }
                style={{ width: this.props.boxWidth }}
                tabIndex='0'
                onClick={this.menuTrigger}
                id='trigger'
                aria-label={this.props.triggerType === 'button'
                ? `${this.props.label} dropdown`
                : `${this.props.id} dropdown current value ${this.state.selectedDisplayValue}`}
                aria-haspopup='listbox'
              >
                <label className = 'ls-labelname'>
                  {this.props.triggerType === 'button'
                    ? `${this.props.label}`
                    : `${this.state.selectedDisplayValue}`}
                </label>
                {this.state.dropdownOpen ? (
                   <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                    <FontAwesomeIcon icon={faCaretDown} />
                )}
              </button>
            )}
          </div>

          {/* dropdowm menu starts here */}
          <div className={`ls-dropdown-menu ${this.state.menuPosition} ${this.state.menuPositionX} `} style={{ width: this.props.menuWidth }}>
            {this.state.dropdownOpen ? (
              <div>
                <ul id='optionList' role='listbox' tabIndex='-1' aria-expanded={this.state.dropdownOpen}
                  aria-hidden={!this.state.dropdownOpen}>
                  {this.props.options.map(option => (
                    <div key={option.value}
                    >
                      <li
                        data-value={option.value}
                        onClick={this.onOptionSelect}
                        tabIndex='0'
                        className={`${option.isDisabled &&
                          'ls-dropdown-noHover'}`}
                        aria-label={option.display}
                        role='option'
                        aria-selected = {this.state.selectedOption === option.value}
                      >
                        <button
                          className={`ls-option`}
                          disabled={option.isDisabled === true}
                          aria-hidden='true'
                          aria-disabled={option.isDisabled === true}
                        >
                          <span>{option.display}</span>
                        </button>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    )
  }
}

ButtonDrop.propTypes = {
  boxWidth: PropTypes.string,
  buttonSize: PropTypes.string,
  buttonType: PropTypes.string,
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  menuWidth: PropTypes.string,
  options: PropTypes.array.isRequired,
  onGetSelectedOption: PropTypes.func.isRequired,
  triggerType: PropTypes.string.isRequired
}

ButtonDrop.defaultProps = {
  addRightMargin: 0,
  label: '',
  boxWidth: null,
  menuWidth: null,
  onGetSelectedOption: () => {}
}
export default ButtonDrop
