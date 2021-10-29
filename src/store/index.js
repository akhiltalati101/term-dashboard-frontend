import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import token from './token'

const reducer = combineReducers({
 // add reducers
 token,
})

const store = configureStore({
  reducer,
})

export default store;