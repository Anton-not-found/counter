import React from 'react';
import s from './SuperButton.module.css';

type SuperButtonPropstype = {
    callback: () => void
    title:string
}
export const SuperButton = (props: SuperButtonPropstype) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div className={s.superButton}>
            <button onClick={onClickHandler}>{props.title}</button>
        </div>
    );
};

