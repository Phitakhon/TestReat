import React, {Component} from "react";
import BodyBooking from "./BodyBooking/BodyBooking";
import HeaderBooking from "./HeaderBooking/HeaderBooking";

class BookingOperationRoom extends Component {
    render()  {
        return (
            <div>
                <HeaderBooking></HeaderBooking>
                <BodyBooking></BodyBooking>
            </div>
        );
    }

}

export default BookingOperationRoom ;