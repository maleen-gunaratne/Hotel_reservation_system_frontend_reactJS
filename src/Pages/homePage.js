import React from "react";
import ButtonDrop from "../ButtonDropdown/ButtonDrop";
import NavBar from "../Navbar/navbar";
import Image from "../Image/image";
import hotel2 from "../Images/hotel2.jpg";
import SearchForm from "../Forms/form";
import Table from "../table/table";

function HomePage() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Image url={hotel2} />
      <NavBar>
        <ButtonDrop
          id="demo1"
          label="Reservations"
          buttonType="primary"
          buttonSize="large"
          triggerType="button"
          isCheckboxEnabled={true}
          options={[
            { value: "Strategic", display: "Strategic", isDisabled: false },
            {
              value: "Understanding",
              display: "Understanding",
              isDisabled: false,
            },
            { value: "Price", display: "Price", isDisabled: false },
          ]}
        />

        <ButtonDrop
          id="demo2"
          label="Inventory"
          buttonType="primary"
          buttonSize="large"
          triggerType="button"
          isCheckboxEnabled={true}
          options={[
            { value: "Strategic", display: "Strategic", isDisabled: false },
            {
              value: "Understanding",
              display: "Understanding",
              isDisabled: false,
            },
            { value: "Price", display: "Price", isDisabled: false },
          ]}
        />

        <ButtonDrop
          id="demo3"
          label="Reports"
          buttonType="primary"
          buttonSize="large"
          triggerType="button"
          isCheckboxEnabled={true}
          options={[
            { value: "Strategic", display: "Strategic", isDisabled: false },
            {
              value: "Understanding",
              display: "Understanding",
              isDisabled: false,
            },
            { value: "Price", display: "Price", isDisabled: false },
          ]}
        />

        <ButtonDrop
          id="demo4"
          label="Activities"
          buttonType="primary"
          buttonSize="large"
          triggerType="button"
          isCheckboxEnabled={true}
          options={[
            { value: "Strategic", display: "Strategic", isDisabled: false },
            {
              value: "Understanding",
              display: "Understanding",
              isDisabled: false,
            },
            { value: "Price", display: "Price", isDisabled: false },
          ]}
        />

        <ButtonDrop
          id="demo5"
          label="Shopping"
          buttonType="primary"
          buttonSize="large"
          triggerType="button"
          isCheckboxEnabled={true}
          options={[
            { value: "Strategic", display: "Strategic", isDisabled: false },
            {
              value: "Understanding",
              display: "Understanding",
              isDisabled: false,
            },
            { value: "Price", display: "Price", isDisabled: false },
          ]}
        />

        <ButtonDrop
          id="demo6"
          label="Contact Us"
          buttonType="primary"
          buttonSize="large"
          triggerType="button"
          isCheckboxEnabled={true}
          options={[
            { value: "Strategic", display: "Strategic", isDisabled: false },
            {
              value: "Understanding",
              display: "Understanding",
              isDisabled: false,
            },
            { value: "Price", display: "Price", isDisabled: false },
          ]}
        />
      </NavBar>

      
      <SearchForm></SearchForm>


      <Table
        content={[
          { HotelName: "HotelName", RoomName: "RoomName", DailyRates: "DailyRates" ,TotalCost: "TotalCost"},
          { HotelName: "HotelName", RoomName: "RoomName", DailyRates: "DailyRates" ,TotalCost: "TotalCost"},
          { HotelName: "HotelName", RoomName: "RoomName", DailyRates: "DailyRates" ,TotalCost: "TotalCost"},
        ]}
      ></Table>
    </div>
  );
}

export default HomePage;
