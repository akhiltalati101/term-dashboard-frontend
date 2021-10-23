import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
 // add reducers
})

const store = configureStore({
  reducer,
})

export default store;