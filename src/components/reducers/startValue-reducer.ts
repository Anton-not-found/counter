export type StartValueType = {
    startValue: number
}

const initialState = {startValue: 0}
export const startValueReducer = (state: StartValueType = initialState, action: TsarType): StartValueType => {

    switch (action.type) {
        case 'SET START VALUE':
            return {...state, startValue: action.payload.newStartValue}
        case 'INCREMENT-VALUE':
            return {...state, startValue: state.startValue + 1}
        default:
            return state
    }
}

type TsarType = StartValueACType | IncrementValueACType

type StartValueACType = ReturnType<typeof startValueAC>
export const startValueAC = (newStartValue: number) => {
    return {
        type: 'SET START VALUE',
        payload: {
            newStartValue
        }
    } as const
}
type IncrementValueACType = ReturnType<typeof incrementValueAC>
export const incrementValueAC = () => {
    return {
        type: 'INCREMENT-VALUE',
    } as const
}

