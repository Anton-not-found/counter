


export type MaxValueType = {
    maxInputValue: number
}
const initialState:MaxValueType = {maxInputValue: 1}

export const maxValueReducer = (state: MaxValueType = initialState, action: TsarType):MaxValueType => {

    switch (action.type) {
        case 'MAX VALUE':

            return {...state, maxInputValue: action.payload.newMaxInputValue}
        default:
            return state
    }
}

type TsarType = MaxValueACType

type MaxValueACType = ReturnType<typeof maxValueAC>
export const maxValueAC = (newMaxInputValue:number) => {
    return{
        type: 'MAX VALUE',
        payload: {
            newMaxInputValue
        }
    }as const
}

