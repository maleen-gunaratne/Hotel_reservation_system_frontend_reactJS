import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './image.scss'

class Image extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      return(
            <div className='ls-image'>
                <img src={this.props.url} alt={this.props.description} />
            </div>
        )
      }
}

Image.propTypes = {
    url : PropTypes.string.isRequired,
    description: PropTypes.string
  }
  
  Image.defaultProps = {
    description: ''
  }

export default Image