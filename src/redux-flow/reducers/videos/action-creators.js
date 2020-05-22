'use strict'

import { ADD_VIDEO } from './actions'
import { db } from 'config/firebase'

// adiciona novo video com paramêtros passados
export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title }
})

// inverção de controle da ação
export const registerVideo = ({ id, title }) => async (dispatch) => {
  console.log('cadastrando video...')
  // update -> se existir altera, se não cria | retorna promise
  await db.ref('videos').child(id).update({
    id,
    title
  })
  console.log('video cadastrado!')
  dispatch(addVideo({ id, title }))
}

export const fetchVideos = () => (dispatch) => {
  // snapshot -> valores que vem do banco de dados
  db.ref('videos').on('value', (snapshot) => {
    const videos = snapshot.val()
    const ordered = Object.keys(videos)
      .sort((a, b) => videos[a].title < videos[b].title ? -1 : 1)
      .map((id) => ({
        id,
        title: videos[id].title
      }))

    ordered.forEach((video) => dispatch(addVideo(video)))

    // snapshot.forEach((child) => {
       // child.val() -> id e title
    //   dispatch(addVideo(child.val()))
    // })
  })
}
