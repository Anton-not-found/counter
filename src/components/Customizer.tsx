import React from 'react';
import s from './Customizer.module.css';
import {SuperButton} from "./SuperButton";
import {SuperInput} from "./SuperInput";



type CustomizerPropsType = {
    callbackStart: (newStartValue: number) => void
    callbackMax: (newMaxValue: number) => void
    callbackClick: () => void
    customizerSettings: (focus: boolean) => void
    focusValue: boolean
    errorValue: boolean
}
export const Customizer = (props: CustomizerPropsType) => {

    return (
        <div className={s.customizer}>
            <div className={props.errorValue ? s.customizerInput : s.customizerErrorInput}>
                <div className={s.inputItem}>
                    <SuperInput customizerSettings={props.customizerSettings}
                                callback={props.callbackMax}
                                title={'max value: '}
                    />
                </div>
                <div className={s.inputItem}>
                    <SuperInput customizerSettings={props.customizerSettings}
                                callback={props.callbackStart}
                                title={'start value: '}
                    />

                </div>
            </div>
            <div className={s.customizerButton}>
                <SuperButton disabled={!props.focusValue || !props.errorValue} title={'S E T'}
                             callback={props.callbackClick}/>
            </div>
        </div>
    );
};

