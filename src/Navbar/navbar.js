import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './navbar.scss'
 
class NavBar extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
        <div className='ls-topnav' id='myTopnav'>
            {this.props.children}
        </div>
    )
  }
}
 
NavBar.defaultProps = {
  children : ''
}

export default NavBar