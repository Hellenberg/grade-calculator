import React, { Component } from 'react';
import './CalculatedGrade.css';

class CalculatedGrade extends Component {


    renderIsQualified(isQualified) {
        if (isQualified) {
            return
        } else {
            return (
                <div className='danger'>
                    <p>
                        <strong>OBS!</strong> <br></br>
                        Du är ej behörig för vidare studier. <br></br>
                        För att nå en högskoleförberedande examen ska du ha minst 90 procent godkända betyg på en utbildning som omfattar 2500 gymnasiepoäng. Betygen i kurserna svenska/svenska som andraspråk 1, 2, 3, engelska 5, 6 och matematik 1 samt gymnasiearbetet ska vara godkända. En högskoleförberedande examen ger grundläggande behörighet till högskoleutbildning på grundnivå.
                    </p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className='calculatedGrade'>
                <div>
                    {this.renderIsQualified(this.props.isQualified)}
                </div>
                <div>
                    <div>
                        Klarade gymnasiepoäng:  <span className='floatRight'>{this.props.passedPoints}</span>
                    </div>
                </div>
                <div>
                    <div>
                        Ditt jämförelsetal är: <span className='floatRight'>{Math.round(this.props.grade * 10) / 10}</span>
                    </div>
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

export default CalculatedGrade;