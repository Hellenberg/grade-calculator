import React, { Component } from 'react';

class Course extends Component {

    render() {
        return (
            <div className='course'>
                <div><input alt='Kursnamn' className='name' type='text' value={this.props.course.name} onChange={this.props.handleCourseChange} /></div>
                <div><input alt='Antal poäng' type='number' min="0" max="200" value={this.props.course.points} onChange={this.props.handleCourseChange} /></div>
                <div><select name='Betyg' value={this.props.course.grade} onChange={this.props.handleCourseChange}>
                    {this.props.values.map((val) => {
                        return <option value={val}>{val}</option>
                    })}
                    {/* <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option>
                    <option value='E'>E</option>
                    <option value="F">F</option> */}
                </select>
                </div>
                <div>
                    <button className='small-button' onClick={() => this.props.delete()}><i className='item far fa-trash-alt'></i></button>
                </div>
            </div>
        )
    };
}

export default Course;