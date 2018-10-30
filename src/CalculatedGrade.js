import React, { Component } from 'react';
import './CalculatedGrade.css';

export class CalculatedGrade extends Component {

    render() {
        return (
            <div className='calculatedGrade'>
                <div>
                    <div>
                        Ditt meritvärde är: <span className='floatRight'>{Math.round(this.props.grade * 10) / 10}</span>
                    </div>
                </div>
                <div>
                    Lägg till meritpoäng:
                    <input className='merit-points' alt='Antal poäng' type='number' min="0" max="2.5" value={this.props.meritPoints} onChange={this.props.handleMeritPointsChange}></input>
                </div>
                <div>
                    Ditt totala meritvärde är:
                <div className='floatRight'>
                        {Math.round(this.props.totalGrade * 10) / 10}
                    </div>
                </div>
            </div>
        )
    };
}