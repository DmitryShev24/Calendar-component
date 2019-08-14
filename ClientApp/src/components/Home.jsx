import React, { Component } from 'react';
import moment from "moment";
import shortid from 'shortid';
import Counter from './Counter';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numDay: 999,
            year: 2019,
            month: 8,
            date: moment(),
            note: 0,

        }
        this.firstDay = () => {
            let date = this.state.date;
            let firstDay = moment(date).startOf('month').format('d');
            return firstDay;

        }
        this.daysInMonth = () => {
            let date = {
                daysInMonth: this.state.date.daysInMonth(),
                day: this.state.date.toDateString,
            }
        return date;
        }
        this.weekday = moment.weekdaysShort();
        this.onNext = () => {
            this.setState({
                date: this.state.date.add(1, 'month')
            })
        }
        this.onPrev = () => {
            this.setState({
                date: this.state.date.subtract(1, 'month')
            })
        }
        this.openNote = () => {
            this.setState({ note: shortid.generate() })
        }
        this.handleAddNote = e => {
            <Counter/>
        }
    }

    render() {
        let weekday = this.weekday.map((day, index) => {
            return <th key={index}>{day}</th>
        })
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth().daysInMonth; d++) {
            let id = shortid.generate();
            daysInMonth.push(
                <td style={{ paddingRight: '5px' }} key={id}>
                    <span onClick={() => this.handleAddNote(id)}>
                        {d}
                    </span>
                </td>
            );
        }  
        let blanks = [];
        for (let d = 0; d < this.firstDay(); d++) {
            blanks.push(<td key={d} >{''}</td>)
        }
        let rows = [];
        let cells = [];
        var cellSum = [...blanks, ...daysInMonth];

        cellSum.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row);
            }
            else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === cellSum.length - 1) {
                rows.push(cells);
            }
        });

        let daysinmonth = rows.map((d, index) => {
            return <tr key={index} onClick={e => {
                this.openNote();
            }}>
                {d}
            </tr>;
        });
        
        return (
            <div>
                <div>
                    <span onClick={e => {
                        this.onPrev();
                    }}>
                        prev
                    </span>
                    <span style={{ paddingLeft: '120px' }} onClick={e => {
                        this.onNext();
                    }}>
                        next
                    </span>    
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>{weekday}</tr>
                        </thead>
                        <tbody>
                            {daysinmonth}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

