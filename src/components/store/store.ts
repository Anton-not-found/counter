import {combineReducers, createStore} from 'redux'
import {displayValueReducer} from "../reducers/displayValue-reducer";
import {maxValueReducer} from "../reducers/maxValue-reducer";
import {startInputValueReducer} from "../reducers/startInputValue-reducer";


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    displayValue: displayValueReducer,
    maxInputValue: maxValueReducer,
    startInputValue: startInputValueReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store





