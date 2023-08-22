import React, { useState } from 'react'
import classes from './UseInput.module.css'

export default function UserInput(props) {
    const initialUserInput = {
        "current-savings": 10000,
        "yearly-contribution": 1200,
        "expected-return": 7,
        duration: 10

    };
    const [userInput, setUserInput] = useState(initialUserInput);
    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
    };

    const resetHandler = () => {
        setUserInput(initialUserInput)
    };
    const inputChangehandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value
            };
        });
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input onChange={(event) => inputChangehandler('current-savings', event.target.value)} type="number" id="current-savings" value={userInput["current-savings"]} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => inputChangehandler('yearly-contribution', event.target.value)} type="number" id="yearly-contribution" value={userInput["current-savings"]} />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => inputChangehandler('expected-return', event.target.value)} type="number" id="expected-return" value={userInput["expected-return"]} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => inputChangehandler('duration', event.target.value)} type="number" id="duration" value={userInput["duration"]} />
                </p>
            </div>
            <p className={classes.actions}>
                <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={classes.button} >
                    Calculate
                </button>
            </p>
        </form >
    )
}
