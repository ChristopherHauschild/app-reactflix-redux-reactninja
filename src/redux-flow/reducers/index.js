'use strict'
// centraliza reducers

import { combineReducers } from 'redux'
import videos from './videos'
import ui from './ui'
import videoSingle from './video-single'

export default combineReducers({
  ui,
  videos, // === videos: videos
  videoSingle
})
