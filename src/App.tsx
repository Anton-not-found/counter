import React from 'react';
import './App.css';
import {Customizer} from "./components/Customizer";
import {Counter} from "./components/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./components/store/store";
import {currentValueAC} from "./components/reducers/currentValue-reducer";
import {incrementValueAC, startValueAC} from "./components/reducers/startValue-reducer";


function App() {

    const startValue = useSelector<AppRootStateType, number>(state => state.startValue.startValue)
    const currentValue = useSelector<AppRootStateType, number>(state => state.currentValue.currentValue)
    const dispatch = useDispatch()
    const setChangeValueButton = (newStartValue: number) => {
        dispatch(currentValueAC(newStartValue))
    }

    const setClickButton = () => {
        dispatch(startValueAC(currentValue))
    }

    const incrClickButton = () => {
         dispatch(incrementValueAC())
    }

    return (
        <div className="App">
            <Customizer callback={setChangeValueButton}
                        callbackClick={setClickButton}
            />
            <Counter startValue={startValue}
                     incrCallback={incrClickButton}
            />
        </div>
    );
}

export default App;
