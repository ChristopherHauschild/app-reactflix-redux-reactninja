'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { openRegisterVideo } from 'reducers/ui/action-creators'
import styled from 'styled-components'

import { headerHeight } from 'utils/constants'

const MainHeader = ({ onOpenRegisterVideo }) => (
  <Header>
    <HeaderTitle>React<span>flix</span></HeaderTitle>
    <RegisterButton onClick={onOpenRegisterVideo}>Cadastrar vídeo</RegisterButton>
  </Header>
)

// === styled.header = function (...) {}
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: ${headerHeight};
  padding: 0px 10px;
  background: #333;
`

const HeaderTitle = styled.h1`
  & span {
    color: red;
    font-weight: 500;
  }
  color: #fff;
  margin-bottom: 0px;
`

const RegisterButton = styled.button`
  margin-bottom: 0px;
  border: none;
  background: linear-gradient(to right, #575653, #403f3e);
  font-size 13px;
  font-weight: 400; 
  box-shadow: 3px 3px 3px 0px #0005;
`

const mapDispatchToProps = (dispatch) => ({
  onOpenRegisterVideo: () => dispatch(openRegisterVideo())
})

export default connect(null, mapDispatchToProps)(MainHeader)
