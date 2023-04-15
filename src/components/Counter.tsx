import React from 'react';
import s from './Counter.module.css';
import {SuperButton} from "./SuperButton";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";


type CounterPropsType = {
    displayValue: number
    incrCallback: () => void
    resClickButton: () => void
    focusValue: boolean
    errorValue: boolean
}
export const Counter = (props: CounterPropsType) => {
    const startInputValue = useSelector<AppRootStateType, number>(state => state.startInputValue.startInputValue)
    const counterDisplayValue = useSelector<AppRootStateType, number>(state => state.displayValue.displayValue)
    const maxSetValue = useSelector<AppRootStateType, number>(state => state.maxInputValue.maxInputValue)

    const disableConditionIncrValue = maxSetValue <= counterDisplayValue
    const disableConditionResValue = counterDisplayValue === startInputValue
    const disabledButtonsDuringSetting = props.focusValue

    const normalTablo = props.focusValue ? "enter values and press 'set'" : props.displayValue
    const errorTablo = !props.errorValue
    console.log(errorTablo)

    return (
        <div className={s.counter}>
            <div className={disableConditionIncrValue || errorTablo ? s.error : s.tablo}>
                {errorTablo ? 'Incorrect value!' : normalTablo}
            </div>

            <div className={s.button}>
                <SuperButton title={'INCR'} callback={props.incrCallback}
                             disabled={disableConditionIncrValue || disabledButtonsDuringSetting}/>
                <SuperButton title={'R E S'} callback={props.resClickButton}
                             disabled={disableConditionResValue || disabledButtonsDuringSetting}/>
            </div>
        </div>
    );
};

