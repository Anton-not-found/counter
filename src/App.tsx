import React from 'react';
import './App.css';
import {Customizer} from "./components/Customizer";
import {Counter} from "./components/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./components/store/store";
import {maxValueAC} from "./components/reducers/maxValue-reducer";
import {displayValueAC, incrementValueAC, resValueAC} from "./components/reducers/displayValue-reducer";
import {startValueAC} from "./components/reducers/startInputValue-reducer";


function App() {

    const maxInputValue = useSelector<AppRootStateType, number>(state => state.maxInputValue.maxInputValue)
    const displayValue = useSelector<AppRootStateType, number>(state => state.displayValue.displayValue)
    const startInputValue = useSelector<AppRootStateType, number>(state => state.startInputValue.startInputValue)
    const dispatch = useDispatch()

    console.log('Максимальное значение: ' + maxInputValue)
    console.log('Дисплейное значение: ' + displayValue)
    console.log('Стартовое значение: ' + startInputValue)

    const setChangeStartValueButton = (newStartValue: number) => {
        console.log('bla bla')
        dispatch(startValueAC(newStartValue))
    }

    const setChangeMaxValueButton = (newMaxValue: number) => {
        dispatch(maxValueAC(newMaxValue))

    }

    const setClickButton = () => {
        dispatch(displayValueAC(startInputValue))

    }

    const incrClickButton = () => {
        dispatch(incrementValueAC())
    }

    const resClickButton = () => {
        dispatch(resValueAC(startInputValue))
    }


    return (
        <div className="App">
            <Customizer callbackStart={setChangeStartValueButton}
                        callbackMax={setChangeMaxValueButton}
                        callbackClick={setClickButton}
            />
            <Counter displayValue={displayValue}
                     incrCallback={incrClickButton}
                     resClickButton={resClickButton}
            />
        </div>
    );
}

export default App;
