import {combineReducers, createStore} from 'redux'
import {startValueReducer} from "../reducers/startValue-reducer";
import {maxValueReducer} from "../reducers/maxValue-reducer";
import {currentValueReducer} from "../reducers/currentValue-reducer";


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    startValue: startValueReducer,
    maxValue: maxValueReducer,
    currentValue: currentValueReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store





