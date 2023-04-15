import React, {ChangeEvent, useState} from 'react';
import s from './SuperInput.module.css';

type MaxInputPropstype = {
    callback: (newMaxValue:number)=>void
}

export const MaxInput = (props:MaxInputPropstype) => {

    const [maxInputValue, setMaxInputValue] = useState<number>(1)



    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = Number(e.currentTarget.value)
        setMaxInputValue(newMaxValue)
        props.callback(newMaxValue)
    }
    const onfocusHandler = () => {
    }

    return (
        <div className={s.superInput}>
            <span>{'Max value'}
                <input type='number'
                       value={maxInputValue}
                       onChange={onChangeHandler}
                       onFocus={onfocusHandler}
                />
            </span>
        </div>
    );
};

