import React from 'react';
import s from './Customizer.module.css';
import {SuperButton} from "./SuperButton";
import {SuperInput} from "./SuperInput";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";


type CustomizerPropsType = {
    callbackStart: (newStartValue: number) => void
    callbackMax: (newMaxValue: number) => void
    callbackClick: () => void
    customizerSettings: (focus: boolean) => void
    focusValue: boolean
}
export const Customizer = (props: CustomizerPropsType) => {

    const startInputValue = useSelector<AppRootStateType, number>(state => state.startInputValue.startInputValue)
    const maxInputValue = useSelector<AppRootStateType, number>(state => state.maxInputValue.maxInputValue)
    const errorInput = maxInputValue > startInputValue
    const positiveNumber = maxInputValue >= 0 && startInputValue >= 0
    // console.log(errorInput)
    console.log('положительное число: ' + positiveNumber)
    return (
        <div className={s.customizer}>
            <div className={errorInput && positiveNumber ? s.customizerInput : s.customizerErrorInput}>
                <div className={s.inputItem}>
                    <SuperInput customizerSettings={props.customizerSettings}
                                callback={props.callbackMax}
                                title={'max value'}
                    />
                </div>
                <div className={s.inputItem}>
                    <SuperInput customizerSettings={props.customizerSettings}
                                callback={props.callbackStart}
                                title={'start value'}
                    />

                </div>
            </div>
            <div className={s.customizerButton}>
                <SuperButton disabled={!props.focusValue || !errorInput || !positiveNumber} title={'S E T'} callback={props.callbackClick}/>
            </div>
        </div>
    );
};

