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
}
export const Counter = (props: CounterPropsType) => {
    const startInputValue = useSelector<AppRootStateType, number>(state => state.startInputValue.startInputValue)
    const counterDisplayValue = useSelector<AppRootStateType, number>(state => state.displayValue.displayValue)
    const maxSetValue = useSelector<AppRootStateType, number>(state => state.maxInputValue.maxInputValue)

    const disableConditionIncrValue = maxSetValue <= counterDisplayValue
    const disableConditionResValue = counterDisplayValue === startInputValue
    const disabledButtonsDuringSetting = props.focusValue


    console.log('counterDisplay: ' + counterDisplayValue)
    console.log('maxSetValue: ' + maxSetValue)
    return (
        <div className={s.counter}>
            <div className={disableConditionIncrValue ? s.error : s.tablo}>
                {props.focusValue ? 'settings please wait' : props.displayValue}
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

