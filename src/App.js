import React, { Component } from 'react';
import './App.css';
import educationData from './educations';

class Course extends Component {
    render() {
        return (
            <div className='course'>
                <div className='item name'><input alt='Kursnamn' value={this.props.course.name} onChange={this.props.handleCourseChange} /></div>
                <div className='item name'><input alt='Antal poäng' value={this.props.course.points} onChange={this.props.handleCourseChange} /></div>
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
                    <i className='item fas fa-trash-alt' onClick={() => this.props.delete()}></i>
                </div>
            </div>
        )
    };
}

class CalculatedGrade extends Component {

    render() {
        return (
            <div className='calculatedGrade'>
                Ditt meritvärde är:
                {this.props.grade}
                <br/>

                Lägg till meritpoäng:
                <input alt='Antal poäng' value={this.props.meritPoints} onChange={this.props.handleMeritPointsChange}></input>
                <br/>
                Ditt totala meritvärde är: {this.props.totalGrade}
            </div>
        )
    };
}

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: educationData['natur'],
            selected: 'natur',
            calculatedGrade: false,
            meritPoints: 0,
            totalGrade: 0
        };
        this.educations = educationData;
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleCourseChange = this.handleCourseChange.bind(this);
        this.handleMeritPointsChange = this.handleMeritPointsChange.bind(this);
        this.calculateGrade = this.calculateGrade.bind(this);
        this.renderCalculatedGrade = this.renderCalculatedGrade.bind(this);
    }

    delete(i) {
        const courses = this.state.courses;
        if (courses[i].required) {
            alert('Kursen är obligatorisk för att få högskolebehörighet!');
        } else {
            courses.splice(i, 1);
            this.setState({ courses: courses });
        }
    }

    handleMeritPointsChange(event) {
        const meritPoints = event.target.value;
        const totalGrade = meritPoints + this.calculatedGrade;
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
        console.log(event.target.value);

        if (course.required && event.target.name !== 'Betyg') {
            alert('Kursen är obligatorisk för att få högskolebehörighet!');
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
                    console.log('A');
                    totalGradePoints += course.points * 20;
                    break;
                case 'B':
                    console.log('A');
                    totalGradePoints += course.points * 17.5;
                    break;
                case 'C':
                    console.log('A');
                    totalGradePoints += course.points * 15;
                    break;
                case 'D':
                    console.log('A');
                    totalGradePoints += course.points * 12.5;
                    break;
                case 'E':
                    console.log('A');
                    totalGradePoints += course.points * 10;
                    break;
                default:
                    totalGradePoints += course.points * 0;
                    break;
            }
        }
        const grade = totalGradePoints / totalPoints;
        const totalGrade = grade + this.meritPoints;
        this.setState({ 
            calculatedGrade: grade,
            totalGrade: totalGrade
         });
    }
    renderCalculatedGrade() {
        if (this.state.calculatedGrade !== false) {
            return (<CalculatedGrade
                grade={this.state.calculatedGrade}
                meritPoints={this.meritPoints}
                totalGrade={this.totalGrade}
                handleMeritPointsChange={(event) => this.handleMeritPointsChange(event)}
            />)
        } else {
            return;
        }
    }
    render() {
        return (
            <div className='center'>
                    <div className="grid">
                    <div>
                        Välj program:
                        <select value={this.state.selected} onChange={this.handleEducationChange}>
                            {Object.keys(this.educations).map((name, index) => {
                                return <option key={index} value={name}>{name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        {this.renderCourses()}
                    </div>
                    <div>
                        <button className='add' onClick={() => this.addCourse()}>+</button>
                    </div>
                    <div>
                        <button onClick={this.calculateGrade}>Beräkna meritvärde</button>
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
            <div className="App">
                <Courses />
            </div>
        );
    }
}

export default App;
