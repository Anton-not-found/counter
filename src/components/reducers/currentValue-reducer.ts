export type CurrentValueType = {
    currentValue: number
}
const initialState: CurrentValueType = {currentValue: 0}

export const currentValueReducer = (state: CurrentValueType = initialState, action: TsarType): CurrentValueType => {
    switch (action.type) {
        case 'CURRENT VALUE':
            return {...state, currentValue: action.payload.currentValue}
        // case 'INCREMENT-VALUE':
        //     return {...state, currentValue: action.payload.currentValue + 1}
         default:
             return state
    }
}

type TsarType = CurrentValueACType

type CurrentValueACType = ReturnType<typeof currentValueAC>
export const currentValueAC = (currentValue: number) => {
    return {
        type: 'CURRENT VALUE',
        payload: {
            currentValue
        }
    } as const
}
// type IncrementValueACType = ReturnType<typeof incrementValueAC>
// export const incrementValueAC = (currentValue:number) => {
//     return {
//         type: 'INCREMENT-VALUE',
//         payload: {
//             currentValue
//         }
//
//     } as const
// }

