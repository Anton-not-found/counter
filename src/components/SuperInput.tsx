import React, {ChangeEvent, FocusEvent, useState} from 'react';
import s from './SuperInput.module.css';

type MaxInputPropstype = {
    callback: (newMaxValue: number) => void
    customizerSettings: (focus: boolean) => void
    title:string
}

export const SuperInput = (props: MaxInputPropstype) => {


    const [maxInputValue, setMaxInputValue] = useState<number>(1)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = Number(e.currentTarget.value)
        setMaxInputValue(newMaxValue)
        props.callback(newMaxValue)
    }
    const onfocusHandler = (e: FocusEvent<HTMLInputElement>) => {
        let focus = e ? true : false
        props.customizerSettings(focus)
    }

    return (
        <div className={s.superInput}>
            <span>{props.title}
                <input type='number'
                       value={maxInputValue}
                       onChange={onChangeHandler}
                       onFocus={onfocusHandler}

                />
            </span>
        </div>
    );
};

