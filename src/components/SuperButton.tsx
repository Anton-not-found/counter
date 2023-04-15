import React from 'react';
import s from './SuperButton.module.css';

type SuperButtonPropstype = {
    disabled:boolean
    callback: () => void
    title:string
}
export const SuperButton = (props: SuperButtonPropstype) => {
    const onClickHandler = () => {
        props.callback()
    }
    // <span className={s.indicator}></span>

    return (

        <div className={s.superButton}>
            <div className={props.disabled ? s.indicatorRed : s.indicator}></div>
            <button disabled={props.disabled} onClick={onClickHandler}>{props.title}</button>
            <div className={props.disabled ? s.indicator : s.indicatorGreen}></div>
        </div>
    );
};

