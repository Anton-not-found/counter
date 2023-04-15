export type StartValueType = {
    startInputValue: number
}
const initialState: StartValueType = {startInputValue: 0}

export const startInputValueReducer = (state: StartValueType = initialState, action: TsarType): StartValueType => {
    switch (action.type) {
        case 'START-INPUT-VALUE':
            return {...state, startInputValue: action.payload.startInputValue}
         default:
             return state
    }
}

type TsarType = StartValueACType

type StartValueACType = ReturnType<typeof startValueAC>
export const startValueAC = (startInputValue: number) => {
    return {
        type: 'START-INPUT-VALUE',
        payload: {
            startInputValue
        }
    } as const
}
