


export type MaxValueType = {
    maxValue: number
}
const initialState:MaxValueType = {maxValue: 1}

export const maxValueReducer = (state: MaxValueType = initialState, action: TsarType):MaxValueType => {

    switch (action.type) {
        case 'MAX VALUE':

            return {...state, maxValue: action.payload.newMaxValue}
        default:
            return state
    }
}

type TsarType = MaxValueACType

type MaxValueACType = ReturnType<typeof maxValueAC>
export const maxValueAC = (newMaxValue:number) => {
    return{
        type: 'MAX VALUE',
        payload: {
            newMaxValue
        }
    }as const
}

