'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { selectVideoSingle } from 'reducers/video-single/action-creators'
import Play from 'components/play'
import styled from 'styled-components'

const VideosList = ({ videos, handleClick }) => (
  <Container>

    {/* Conectando com reducer videos */}
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoLink href='#' onClick={handleClick(id)} >
          <VideoThumb>
            <PlayStyled />
          </VideoThumb>
          <VideoTitle>{videos[id].title}</VideoTitle>
        </VideoLink>
      </Video>
    ))}

  </Container>
)

const PlayStyled = styled(Play)`
  width: 50px;
  height: 50px;

  fill: #999;
  transition: all .15s ease-in-out;
`
// & -> referencia o próprio elemento
const Video = styled.section`
  &:hover ${PlayStyled} {
    transform: scale(1.2);
    fill: #666;
  }
`
// component & {Video} assume style quando dentro do Container
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  padding-top: 15px;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
`

const VideoThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 150px;
  border-radius: 1.5px;
  background: #fff;
  box-shadow: 3px 3px 2px 0px #0006;
`

const VideoTitle = styled.h2`
  font-size: 18px;
  margin-top: 10px;
  margin-left: 5px;
  color: #fff;
`

const VideoLink = styled.a`
  color: inherit;
`

const mapStateToProps = (state) => ({
  videos: state.videos
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (id) => (e) => {
    e.preventDefault()
    dispatch(selectVideoSingle(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideosList)
