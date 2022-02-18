import React, { Component } from "react";
import './HeaderBooking.css'
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { addLocale } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



export class HeaderBooking extends Component {

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
            userId: null,
            name: null,
            phone: null,
            department: null,
            dateStart: null,
            dateTo: null,
            timeStart: null,
            timeTo: null,
            user: null,
            room: null,
            visible: false
        };

        this.userList = [
            { name: 'นางสาว จันทรา พุ่งเรือง', userId: '59731', 
                phone: '097-445-7562', department: 'แผนกฉุกเฉินและอุบัติเหตุ' },
            { name: 'นาย อยัน ทันทวน', userId: '59734' , phone: '097-555-7562', department: 'แผนกหู คอ จมูก' },
            { name: 'นาย ชลธร วรเลิศ', userId: '152090' , phone: '097-945-1169', department: 'แผนกศัลยกรรม'  },
            { name: 'นาย นิกร แทนลา', userId: '854133' , phone: '086-476-2002', department: 'แผนกศัลยกรรม' },
            { name: 'นาย กนก เจริญสุข', userId: '15265' , phone: '098-445-8862', department: 'แผนกวิสัญญี' },
            { name: 'นางสาว ปภัสรา ศรีโพธิ์', userId: '956117' , phone: '089-115-1564', department: 'แผนกวิสัญญี' },
            { name: 'นางสาว อังรพิมพ์ ใจวันดี', userId: '45996' , phone: '097-112-5564', department: 'แผนกวิสัญญี' },
            { name: 'นางสาว ภัทรพร ยาตรา', userId: '454123' , phone: '089-945-9562', department: 'แผนกรังสีกรรม' }
        ];

        this.roomList = [
            {room: 'ห้อง A'},
            {room: 'ห้อง B'},
            {room: 'ห้อง C'},
            {room: 'ห้อง D'},
            {room: 'ห้อง X-ray'}
        ]

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
        this.onCountryChange = this.onCountryChange.bind(this);
        this.onRoomChange = this.onRoomChange.bind(this);
        this.checkValue = this.checkValue.bind(this);
        this.nameChange = this.nameChange.bind(this);

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

    onCountryChange(e) {
        this.setState({ user: e.value });
        this.setState({ userId: e.value.userId})
        this.setState({ name : e.value.name});
        this.setState({ phone: e.value.phone});
        this.setState({ department : e.value.department});
    }

    onRoomChange(e) {
        this.setState({ room: e.value });
    }

    checkValue() {
        this.setState({            
            userId: null,
            name: null,
            phone: null,
            department: null,
            dateStart: null,
            dateTo: null,
            timeStart: null,
            timeTo: null,
            user: null,
            room: null})
    }

    nameChange(e) {
        this.setState({name : e.value})
    }


    render() {
        return (
            <div>
                <div className="col-11 mt-5 mx-auto card">
                    <div className="card-body SetText">
                        <div>
                            <label>จองห้องผ่าตัด</label>
                        </div>
                        <from id="test">
                            <div className="row col-12" style={{padding: "10px", fontSize: 18}}>
                                <div className="form-group col-3" >
                                    <label htmlFor="user">รหัสพนักงาน </label>
                                     <br/>
                                    <Dropdown value={this.state.user} options={this.userList} onChange={this.onCountryChange} 
                                        optionLabel="userId" filter filterBy="userId" style={{ width: 250 }} placeholder="ค้นหารหัสพนักงาน"/>
                                </div>
                                <div className="form-group col-3" >
                                    <label htmlFor="name">ชื่อ - นามสกุล </label>
                                    <InputText value={this.state.name} onChange={this.nameChange}  disabled/>
                                </div>
                                <div className="form-group col-3" >
                                    <label htmlFor="phone">เบอร์โทรติดต่อ </label>
                                    <InputText value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})}  disabled/>
                                </div>
                                <div className="form-group col-3" >
                                    <label htmlFor="department">แผนก </label>
                                    <InputText value={this.state.department} onChange={(e) => this.setState({department: e.target.value})}  disabled/>
                                </div>
                            </div>
    
                            <div className="row col-12" style={{padding: "10px", fontSize: 18}}>
                                <div className="form-group col-2" >
                                    <label htmlFor="startDate">วันที่เริ่มใช้ห้อง </label>
                                    <Calendar id="icon" locale="th" value={this.state.dateStart} onChange={(e) => this.setState({ dateStart: e.value })} showIcon  />
                                </div>
                                <div className="form-group col-1">
                                    <label htmlFor="startTime">เวลา </label>
                                    <Calendar id="time24" value={this.state.timeStart} onChange={(e) => this.setState({ timeStart: e.value })} timeOnly />
                                </div>
                                <div className="form-group col-2" >
                                    <label htmlFor="toDate">ถึงวันที่ </label>
                                    <Calendar id="icon" locale="th" value={this.state.dateTo} onChange={(e) => this.setState({ dateTo: e.value })} showIcon />
                                </div>
                                <div className="form-group col-1">
                                    <label htmlFor="startTime">เวลา </label>
                                    <Calendar id="time24" value={this.state.timeTo} onChange={(e) => this.setState({ timeTo: e.value })} timeOnly />
                                </div>
                                <div className="form-group col-3" >
                                    <label htmlFor="room">ห้องผ่าตัด </label>
                                    <br/>
                                    <Dropdown value={this.state.room} options={this.roomList} onChange={this.onRoomChange} 
                                        optionLabel="room" filter filterBy="room" style={{ width: 250 }} placeholder="ค้นหาห้องผ่าตัด"/>
                                </div>
                                <div className="form-group col-3" >
                                    <div className="center" style={{paddingTop:'25px'}}>
                                        <Button label="จองห้องผ่าตัด"  className="p-button-info" onClick={this.checkValue}/>
                                    </div>
                                </div>
                            </div>
    
                        </from>
                    </div>
                </div>
            </div>
        );
    }

}

export default HeaderBooking;