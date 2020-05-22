'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'
import { closeRegisterVideo } from 'reducers/ui/action-creators'

const RegisterVideo = ({ onSubmit, onCloseRegisterVideo }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar Vídeo</h2>

    <label htmlFor='id'>ID do vídeo:</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Título do vídeo:</label>
    <input type='text' id='title' name='title' />

    <Button type='submit'>Cadastrar</Button>

    <ButtonClose onClick={onCloseRegisterVideo} type='button'>&times;</ButtonClose>
  </Form>
)

const Form = styled.form`
  position: relative;

  background: #fff;
  box-shadow: 3px 3px 2px 0px #0005;
  padding: 10px;
`

const Button = styled.button`
  background: #333;
  border: none;
  font-size 13px;
  font-weight: 400;
`

const ButtonClose = styled.button`
  position: absolute;
  top: 12px;
  right: 10px;
  height: 30px;
  width: 30px;

  line-height: 1;
  font-size: 18px;
  padding: 0px;
  background: #333;
  border: none;
  margin-bottom: 0px;
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist() // não será nulificado
    // e.target.elements. -> pega a partir do name
    const {
      id: { value: id },
      title: { value: title }
    } = e.target // pegando de e.target id e title e seu respectivo value

    await dispatch(registerVideo({ id, title }))
    e.target.reset()
    e.target[0].focus()
  },

  onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
