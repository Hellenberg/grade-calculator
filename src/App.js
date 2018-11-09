import React, { Component } from 'react';
import fetch from 'node-fetch';

import './App.css';
import {CalculatedGrade} from './CalculatedGrade';
import educationData from './educations';

class Course extends Component {
    render() {
        return (
            <div className='course'>
                <div><input alt='Kursnamn' className='name' type='text' value={this.props.course.name} onChange={this.props.handleCourseChange} /></div>
                <div><input alt='Antal poäng' type='number' min="0" max="200" value={this.props.course.points} onChange={this.props.handleCourseChange} /></div>
                <div><select name='Betyg' value={this.props.course.grade} onChange={this.props.handleCourseChange}>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option>
                    <option value='E'>E</option>
                    <option value="F">F</option>
                </select>
                </div>
                <div>
                    <button className='small-button'  onClick={() => this.props.delete()}><i className='item far fa-trash-alt'></i></button>
                </div>
            </div>
        )
    };
}

class Courses extends Component {
    constructor(props) {
        super(props);
        this.educations = educationData;
        const courses = this.educations['Naturvetenskapsprogrammet'];
        console.log(this.educations[0])
        console.log(courses);
        this.state = {
            courses: courses,
            selected: 'Naturvetenskapsprogrammet',
            calculatedGrade: false,
            meritPoints: 0,
            totalGrade: 0
        };
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleCourseChange = this.handleCourseChange.bind(this);
        this.handleMeritPointsChange = this.handleMeritPointsChange.bind(this);
        this.calculateGrade = this.calculateGrade.bind(this);
        this.renderCalculatedGrade = this.renderCalculatedGrade.bind(this);
    }

    delete(i) {
        const courses = this.state.courses;
        if (courses[i].required) {
            alert('Notera att du behöver vara godkänd i kursen för att få högskolebehörighet!');
        }
        courses.splice(i, 1);
        this.setState({ courses: courses });
    }

    handleMeritPointsChange(event) {
        let meritPoints = parseFloat(event.target.value);
        if (meritPoints < 0 || isNaN(meritPoints)) {
            meritPoints = '';
        } else if (meritPoints > 2.5) {
            meritPoints = 2.5;
        }
        this.setState({
            meritPoints: meritPoints,
        });
    }
    handleTotalGradeUpdate(event) {
        const meritPoints = parseFloat(event.target.value);
        const totalGrade = meritPoints + this.state.calculatedGrade;
        console.log('totalt: ', totalGrade);
        this.setState({
            meritPoints: meritPoints,
            totalGrade: totalGrade
        });
    }

    handleEducationChange(event) {
        const education = event.target.value;
        const newCourses = this.educations[education];
        console.log(newCourses);
        this.setState({
            courses: newCourses,
            selected: event.target.value
        });
    }

    handleCourseChange(event, i) {
        const courses = this.state.courses.slice();
        const course = courses[i]

        if (course.required && event.target.name !== 'Betyg') {
            alert('Kursen är obligatorisk för att få högskolebehörighet!');
            return;
        }

        if (event.target.alt === 'Antal poäng') {
            course.points = event.target.value;
        }
        else if (event.target.alt === 'Kursnamn') {
            course.name = event.target.value;
        }
        else if (event.target.name === 'Betyg') {
            course.grade = event.target.value;
        }

        courses[i] = course;
        this.setState({ courses: courses });
    }

    addCourse() {
        const courses = this.state.courses.slice();
        const course = {
            name: 'Kursnamn',
            points: 100,
            grade: 'F',
            required: false,
        };
        courses.push(course);
        this.setState({ courses: courses });
    }


    renderCourse(i) {
        return <Course
            course={this.state.courses[i]}
            delete={() => this.delete(i)}
            handleCourseChange={(event) => this.handleCourseChange(event, i)}
        />
    }

    renderCourses() {
        return (
            <div className='coursesGrid'>
                <div className='course course-heading'>
                    <div>
                        Kursnamn
                    </div>
                    <div>
                        Poäng
                    </div>
                    <div>
                        Betyg
                    </div>
                </div>
                {this.state.courses.map((name, index) => {
                    return <div key={index}>{this.renderCourse(index)}</div>
                })}
            </div>
        )
    }
    calculateGrade() {
        let totalPoints = 0;
        let totalGradePoints = 0;
        for (let course of this.state.courses) {
            totalPoints += course.points;
            switch (course.grade) {
                case 'A':
                    totalGradePoints += course.points * 20;
                    break;
                case 'B':
                    totalGradePoints += course.points * 17.5;
                    break;
                case 'C':
                    totalGradePoints += course.points * 15;
                    break;
                case 'D':
                    totalGradePoints += course.points * 12.5;
                    break;
                case 'E':
                    totalGradePoints += course.points * 10;
                    break;
                default:
                    totalGradePoints += course.points * 0;
                    break;
            }
        }
        const grade = totalGradePoints / totalPoints;
        console.log('merit', this.state.meritPoints);
        const totalGrade = grade + this.state.meritPoints;
        this.setState({ 
            calculatedGrade: grade,
            totalGrade: totalGrade
         });
    }
    renderCalculatedGrade() {
        if (this.state.calculatedGrade !== false) {
            return (<CalculatedGrade
                grade={this.state.calculatedGrade}
                meritPoints={this.state.meritPoints}
                totalGrade={this.state.totalGrade}
                handleMeritPointsChange={(event) => this.handleMeritPointsChange(event)}
            />)
        } else {
            return;
        }
    }
    render() {
        return (
            <div className='center'>
                    <div className="grid card">
                    <div>
                        Välj program:
                        <select className='margin floatRight' value={this.state.selected} onChange={this.handleEducationChange}>
                            {Object.keys(this.educations).map((name, index) => {
                                return <option key={index} value={name}>{name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        {this.renderCourses()}
                    </div>
                    <div>
                        <button className='small-button floatRight' onClick={() => this.addCourse()}><i className="fas fa-plus"></i></button>
                    </div>
                    <div>
                        <hr></hr>
                        <button className='calculate floatRight' onClick={this.calculateGrade}>Beräkna meritvärde</button>
                    </div>
                    <div>
                        {this.renderCalculatedGrade()}
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="app">
                <Courses />
            </div>
        );
    }
}

export default App;
