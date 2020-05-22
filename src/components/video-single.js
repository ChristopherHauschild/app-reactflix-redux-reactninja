'use strict'

import React from 'react'
import styled from 'styled-components'

const VideoSingle = ({ id, title }) => (
  <Container>
    <Iframe width='560' height='480' src={`https://www.youtube.com/embed/${id}`} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
    <Title>{title}</Title>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #000;
`

const Iframe = styled.iframe`
  width: 100%;
  border: 0;
`

const Title = styled.h2`
  padding-top: 15px;
  font-size: 30px;
  text-align: center;
  color: #fff;
`
export default VideoSingle
