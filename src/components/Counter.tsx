import React from 'react';
import s from './Counter.module.css';
import {SuperButton} from "./SuperButton";


type CounterPropsType = {
    displayValue: number
    incrCallback:()=>void
    resClickButton:()=>void
}
export const Counter = (props: CounterPropsType) => {


    return (
        <div className={s.counter}>
            <div className={s.tablo}>
                {props.displayValue}
            </div>

            <div className={s.button}>
                <SuperButton title={'INCR'} callback={props.incrCallback}/>
                <SuperButton title={'R E S'} callback={props.resClickButton}/>
            </div>
        </div>
    );
};

