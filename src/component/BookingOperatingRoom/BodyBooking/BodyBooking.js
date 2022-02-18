import React, { Component } from "react";
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { addLocale } from 'primereact/api';
import TableBooking from "../TableBooking/TableBooking";

export class BodyBooking extends Component {

    constructor(props) {
        super(props);

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        this.state = {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            date8: null,
            date9: null,
            date10: null,
            date11: null,
            date12: null,
            date13: null,
            date14: null,
            date15: null,
            date16: null,
            date17: null,
            dates1: null,
            dates2: null,
            visible: false
        };

        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);

        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        this.invalidDates = [today];

        this.dateTemplate = this.dateTemplate.bind(this);
        this.monthNavigatorTemplate = this.monthNavigatorTemplate.bind(this);
        this.yearNavigatorTemplate = this.yearNavigatorTemplate.bind(this);
        this.onVisibleChange = this.onVisibleChange.bind(this);

        addLocale('th', {
            firstDayOfWeek: 1,
            dayNames: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
            dayNamesShort: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
            dayNamesMin: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
            monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฏาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
            monthNamesShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
            today: 'วันนี้',
            clear: 'ล้างค่า'
        });
    }

    dateTemplate(date) {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    monthNavigatorTemplate(e) {
        return <Dropdown value={e.value} options={e.options} onChange={(event) => e.onChange(event.originalEvent, event.value)} style={{ lineHeight: 1 }} />;
    }

    yearNavigatorTemplate(e) {
        return <Dropdown value={e.value} options={e.options} onChange={(event) => e.onChange(event.originalEvent, event.value)} className="ml-2" style={{ lineHeight: 1 }} />;
    }

    onVisibleChange(e) {
        this.setState((prevState) => ({
            visible: e.type === 'dateselect' || !prevState.visible
        }), e.callback);
    }

    render() {
        return (
            <div className="col-11 mt-5 mx-auto card">
                <div className="card-body SetText">
                    {/* <div>
                        <from>
                            <div className="row col-12" style={{ padding: "10px", fontSize: 18 }}>
                                <div className="form-group col-3" >
                                    <label htmlFor="userId">ห้องผ่าตัด </label>
                                    <input type="text" className="form-control" id="userId" name="userId" />
                                </div>
                                <div className="form-group col-2" >
                                    <label htmlFor="name">วันที่เริ่มใช้ห้อง </label>
                                    <Calendar id="icon" locale="th" value={this.state.date2} onChange={(e) => this.setState({ date2: e.value })} showIcon />
                                </div>
                                <div className="form-group col-1" >
                                    <label htmlFor="phone">เวลา </label>
                                    <Calendar id="time24" value={this.state.date8} onChange={(e) => this.setState({ date8: e.value })} timeOnly />
                                </div>
                                <div className="form-group col-2" >
                                    <label htmlFor="department">ถึงวันที่ </label>
                                    <Calendar id="icon" locale="th" value={this.state.date2} onChange={(e) => this.setState({ date2: e.value })} showIcon />
                                </div>
                                <div className="form-group col-1" >
                                    <label htmlFor="phone">เวลา </label>
                                    <Calendar id="time24" value={this.state.date8} onChange={(e) => this.setState({ date8: e.value })} timeOnly />
                                </div>
                                <div className="form-group col-3" >
                                    <div className="center">
                                        <button type="button" class="btn btn-primary">ค้นหา</button>
                                    </div>
                                </div>
                            </div>


                        </from>
                    </div> */}

                    <TableBooking/>

                </div>
            </div>
        );
    }

}

export default BodyBooking;