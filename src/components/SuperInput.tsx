import React, {ChangeEvent, FocusEvent, useState} from 'react';
import s from './SuperInput.module.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";

type InputValuePropsType = {
    callback: (inputValue: number) => void
    customizerSettings: (focus: boolean) => void
    title: string
}

export const SuperInput = (props: InputValuePropsType) => {

   // const startInputValue = useSelector<AppRootStateType, number>(state => state.startInputValue.startInputValue)
   // const maxInputValue = useSelector<AppRootStateType, number>(state => state.maxInputValue.maxInputValue)

    const [inputValue, setinputValue] = useState<number>(1)
    //const errorInput = maxInputValue > startInputValue
    // console.log('Старт Инпут: ' + startInputValue)
    // console.log('Макс Инпут: ' + maxInputValue)
   // console.log(errorInput)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = Number(e.currentTarget.value)
        setinputValue(inputValue)
        props.callback(inputValue)
    }
    const onfocusHandler = (e: FocusEvent<HTMLInputElement>) => {
        let focus = e ? true : false
        props.customizerSettings(focus)
    }

    return (
        <div className={s.superInput}>
            <span>{props.title}
                <input type='number'
                       value={inputValue}
                       onChange={onChangeHandler}
                       onFocus={onfocusHandler}

                />
            </span>
        </div>
    );
};

