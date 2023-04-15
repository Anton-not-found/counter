import React, {ChangeEvent, useState} from 'react';
import s from './SuperInput.module.css';



export const MaxInput = () => {

    const [maxInputValue, setMaxInputValue] = useState<number>(0)



    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number(e.currentTarget.value)
        setMaxInputValue(newValue)
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

