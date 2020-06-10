import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './table.scss'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: []
        }
    }

    componentDidUpdate() {
        if (this.state.content !== this.props.content) {
            this.setState({ content: this.props.content }, () => {
                console.log("result",this.state.content)
            })
        }
    }

    render() {
      return(
            <div className='hr-table-container'>
                <label className="hr-search-label">Search Results</label>
                {this.props.content.map(result => (
                    <div className="hr-result-card">
                        <p>{result.HotelName }{"\n"}</p>
                        <p>{result.RoomName }{"\n"}</p>
                        <p>{result.DailyRates }{"\n"}</p>
                        <p>{result.TotalCost }{"\n"}</p>
                    </div>
                ))}
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

export default Table