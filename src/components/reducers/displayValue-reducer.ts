export type StartValueType = {
    displayValue: number
}

const initialState = {displayValue: 0}
export const displayValueReducer = (state: StartValueType = initialState, action: TsarType): StartValueType => {

    switch (action.type) {
        case 'SET DISPLAY VALUE':
            return {...state, displayValue: action.payload.startInputValue}
        case 'INCREMENT-VALUE':
            return {...state, displayValue: state.displayValue + 1}
        case 'RESET-VALUE':
            return {...state, displayValue: action.payload.startInputValue}
        default:
            return state
    }
}

type TsarType = DisplayValueACType | IncrementValueACType | ResValueACType

type DisplayValueACType = ReturnType<typeof displayValueAC>
export const displayValueAC = (startInputValue: number) => {
    return {
        type: 'SET DISPLAY VALUE',
        payload: {
            startInputValue
        }
    } as const
}
type IncrementValueACType = ReturnType<typeof incrementValueAC>
export const incrementValueAC = () => {
    return {
        type: 'INCREMENT-VALUE',
    } as const
}

type ResValueACType = ReturnType<typeof resValueAC>
export const resValueAC = (startInputValue:number) => {
    return {
        type: 'RESET-VALUE',
        payload: {
            startInputValue
        }
    } as const
}

