import React, {useState} from 'react';
import './App.css';
import {Customizer} from "./components/Customizer";
import {Counter} from "./components/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./components/store/store";
import {maxValueAC} from "./components/reducers/maxValue-reducer";
import {displayValueAC, incrementValueAC, resValueAC} from "./components/reducers/displayValue-reducer";
import {startValueAC} from "./components/reducers/startInputValue-reducer";

function App() {

    const displayValue = useSelector<AppRootStateType, number>(state => state.displayValue.displayValue)
    const startInputValue = useSelector<AppRootStateType, number>(state => state.startInputValue.startInputValue)
    const dispatch = useDispatch()

    const [focusValue, setFocusValue] = useState<boolean>(false)
    //  console.log('Максимальное значение: ' + maxInputValue)
    //  console.log('Дисплейное значение: ' + displayValue)
    //   console.log('Стартовое значение: ' + startInputValue)

    const setChangeStartValueButton = (newStartValue: number) => {
        dispatch(startValueAC(newStartValue))
    }
    const setChangeMaxValueButton = (newMaxValue: number) => {
        dispatch(maxValueAC(newMaxValue))

    }
    const setClickButton = () => {
        dispatch(displayValueAC(startInputValue))
        setFocusValue(false)
    }

    const incrClickButton = () => {
        dispatch(incrementValueAC())
    }

    const resClickButton = () => {
        dispatch(resValueAC(startInputValue))
    }

    const customizerSettings = (focus: boolean) => {
        setFocusValue(true)
    }

    return (
        <div className="App">
            <Customizer callbackStart={setChangeStartValueButton}
                        callbackMax={setChangeMaxValueButton}
                        callbackClick={setClickButton}
                        customizerSettings={customizerSettings}
            />
            <Counter displayValue={displayValue}
                     incrCallback={incrClickButton}
                     resClickButton={resClickButton}
                     focusValue={focusValue}

            />
        </div>
    );
}

export default App;
