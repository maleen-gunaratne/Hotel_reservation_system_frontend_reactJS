import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonDrop from "../ButtonDropdown/ButtonDrop";
import InputBox from "../InputBox/inputbox";
import Image from "../Image/image"
import "./form.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import hotel3 from "../Images/hotel3.jpg"
import hotel4 from "../Images/hotel4.jpg"
import $ from 'jquery';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operator: "",
      country: "",
      city: "",
      hotel: "",
      arrivalDate: new Date(),
      nights: "",
      departureDate: new Date(),
      rooms: "",
      adults: "",
      children: ""
    };

    this.searchDetails = [];
   // gettourOperatorNames()
  }

  componentWillMount() {
    this.gettourOperatorNames();
  //  this.getTodos();
  }

  gettourOperatorNames() {
    $.ajax({
      url: 'https://localhost:8080/api/tourOpertorNames',
      dataType: 'json',
      cache: false,
      success: function (data) {
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }
    });
  }


  handleChange = (event) => {
    this.setState({ inputTextValue: event.target.value }, () => {
      this.props.getInputTextValue(this.state.inputTextValue);
      this.props.inputTextValidation(this.state.inputTextValue);
    });
  };

  onGetSelectedOperator = (selectOption) => {
    this.setState({ operator: selectOption });
  };

  onGetSelectedCountry = (selectOption) => {
    this.setState({ country: selectOption });
  };

  onGetSelectedCity = (selectOption) => {
    this.setState({ city: selectOption });
  };

  onGetSelectedHotel = (selectOption) => {
    this.setState({ hotel: selectOption });
  };

  handleArrivalDate = (date) => {
    this.setState({ arrivalDate: date });
    console.log("output", this.state.arrivalDate);
  };

  handleDepartureDate = (date) => {
    this.setState({ departureDate: date });
    console.log("output", this.state.departureDate);
  };

  getDaysSpend = (textValue) => {
    this.setState({ nights: textValue }, () => {
      console.log("output", this.state.nights);
    });
  };

  getRooms = (textValue) => {
    this.setState({ rooms: textValue }, () => {
      console.log("output", this.state.rooms);
    });
  };

  getAdults = (textValue) => {
    this.setState({ adults: textValue }, () => {
      console.log("output", this.state.adults);
    });
  };

  getChildren = (textValue) => {
    this.setState({ children: textValue }, () => {
      console.log("output", this.state.children);
    });
  };

  search = () => {
    this.searchDetails.push({
      operator: this.state.operator,
      country: this.state.country,
      city: this.state.city,
      hotel: this.state.hotel,
      arrivalDate: this.state.arrivalDate,
      departureDate: this.state.departureDate,
      nights: this.state.nights,
      adults: this.state.adults,
      rooms: this.state.rooms,
      children: this.state.children,
    });

    console.log("search", this.searchDetails);
  };

  render() {
    return (
      <div className="hr-search-container">
        <div className="hr-form-card">
          <span className="hr-search-row">
            <div style={{ marginRight: "100px" }}>
              <div className="ls-label-search">
                <label> Tour Operator :</label>
              </div>
              <ButtonDrop
                id="demo10"
                label="Select Operator"
                buttonType="primary"
                buttonSize="large"
                triggerType="box"
                isCheckboxEnabled={true}
                onGetSelectedOption={this.onGetSelectedOperator}
                options={[
                  {
                    value: "Strategic",
                    display: "Strategic",
                    isDisabled: false,
                  },
                  {
                    value: "Understanding",
                    display: "Understanding",
                    isDisabled: false,
                  },
                  { value: "Price", display: "Price", isDisabled: false },
                ]}
              />
            </div>
            <div>
              <div className="ls-label-search">
                <label> Arrival Date :</label>
              </div>
              <DatePicker
                selected={this.state.arrivalDate}
                onChange={this.handleArrivalDate}
              />
            </div>
          </span>

          <span className="hr-search-row">
            <div style={{ marginRight: "100px" }}>
              <div className="ls-label-search">
                <label> Country :</label>
              </div>
              <ButtonDrop
                id="demo11"
                label="Select Country"
                buttonType="primary"
                buttonSize="large"
                triggerType="box"
                isCheckboxEnabled={true}
                onGetSelectedOption={this.onGetSelectedCountry}
                options={[
                  {
                    value: "value",
                    display: "USA",
                    isDisabled: false,
                  },
                  {
                    value: "value",
                    display: "chAINA",
                    isDisabled: false,
                  },
                  { value: "value", display: "Japan", isDisabled: false },
                ]}
              />
            </div>

            <div>
              <div className="ls-label-search">
                <label> Departure Date :</label>
              </div>
              <DatePicker
                selected={this.state.departureDate}
                onChange={this.handleDepartureDate}
              />
            </div>
          </span>

          <span className="hr-search-row">
            <div style={{ marginRight: "100px" }}>
              <div className="ls-label-search">
                <label> City :</label>
              </div>
              <ButtonDrop
                id="demo12"
                label="Select City"
                buttonType="primary"
                buttonSize="large"
                triggerType="box"
                isCheckboxEnabled={true}
                onGetSelectedOption={this.onGetSelectedCity}
                options={[
                  {
                    value: "Strategic",
                    display: "Strategic",
                    isDisabled: false,
                  },
                  {
                    value: "Understanding",
                    display: "Understanding",
                    isDisabled: false,
                  },
                  { value: "Price", display: "Price", isDisabled: false },
                ]}
              />
            </div>

            <div>
              <div className="ls-label-search">
                <label> Nights :</label>
              </div>
              <InputBox
                id="demo13"
                width="150px"
                isDisabled={false}
                placeholder="nights..."
                getInputTextValue={this.getDaysSpend}
              />
            </div>
          </span>

          <span className="hr-search-row">
            <div style={{ marginRight: "100px" }}>
              <div className="ls-label-search">
                <label> Hotel :</label>
              </div>
              <ButtonDrop
                id="demo14"
                label="Select Hotel"
                buttonType="primary"
                buttonSize="large"
                triggerType="box"
                isCheckboxEnabled={true}
                onGetSelectedOption={this.onGetSelectedHotel}
                options={[
                  {
                    value: "Strategic",
                    display: "Strategic",
                    isDisabled: false,
                  },
                  {
                    value: "Understanding",
                    display: "Understanding",
                    isDisabled: false,
                  },
                  { value: "Price", display: "Price", isDisabled: false },
                ]}
              />
            </div>

            <div>
              <div className="ls-label-search">
                <label> Guest Details :</label>
              </div>
              <span>
                <span style={{ display: "inline-flex" }}>
                  <label style={{ marginRight: "30px" }}> Rooms :</label>
                  <InputBox
                    id="demo15"
                    width="50px"
                    isDisabled={false}
                    placeholder="rooms..."
                    getInputTextValue={this.getRooms}
                  />
                </span>
                <span style={{ display: "inline-flex" }}>
                  <label style={{ marginRight: "32px" }}> Adults :</label>
                  <InputBox
                    id="demo16"
                    width="50px"
                    isDisabled={false}
                    placeholder="adults..."
                    getInputTextValue={this.getAdults}
                  />
                </span>
                <span style={{ display: "inline-flex" }}>
                  <label style={{ marginRight: "20px" }}> children :</label>
                  <InputBox
                    id="demo17"
                    width="50px"
                    isDisabled={false}
                    placeholder="children..."
                    getInputTextValue={this.getChildren}
                  />
                </span>
              </span>
            </div>
          </span>
          <button className='hr-button' onClick={this.search}>Search</button>
        </div>
        <div className="hr-form-card">
            <Image
            url={hotel3}
            />
        </div>
    
      </div>
    );
  }
}

SearchForm.propTypes = {
  getInputTextValue: PropTypes.func,
  id: PropTypes.string,
  inputTextValidation: PropTypes.func,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
};

SearchForm.defaultProps = {
  width: "300px",
  isDisabled: false,
  placeholder: "",
};

export default SearchForm;
