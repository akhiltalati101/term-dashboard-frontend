import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import token from './token'
import deadlines from './deadlines'

const reducer = combineReducers({
 // add reducers
 token,
 deadlines,
})

const store = configureStore({
  reducer,
})

export default store;