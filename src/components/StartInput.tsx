import React, {ChangeEvent, useState} from 'react';
import s from './SuperInput.module.css';


type SuperInputPropstype = {
    callback:(newStartValue:number)=>void
}

export const StartInput = (props: SuperInputPropstype) => {
    const [startInputValue, setStartInputValue] = useState<number>(0)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = Number(e.currentTarget.value)
        setStartInputValue(newStartValue)
        props.callback(newStartValue)
    }
    const onfocusHandler = () => {

    }

    return (
        <div className={s.superInput}>
            <span>{'Start value'}
                <input type='number'
                       value={startInputValue}
                       onChange={onChangeHandler}
                       onFocus={onfocusHandler}
                />
            </span>
        </div>
    );
};

