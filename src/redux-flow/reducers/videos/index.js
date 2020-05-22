'use strict'

import createReducer from '../create-reducer'
import { ADD_VIDEO } from './actions'

const initialState = {}

const videos = createReducer(initialState, {
  [ADD_VIDEO]: (state, action) => ({
    ...state, // todo state mais video adicionado
    [action.payload.id]: {
      id: action.payload.id,
      title: action.payload.title
    }
  })
})

export default videos
