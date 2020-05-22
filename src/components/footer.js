'use strict'

import React from 'react'
import styled from 'styled-components'

import { footerHeight } from 'utils/constants'

const MainFooter = () => (
  <Footer>
    Christopher H. Schott - 2020
    <span>&copy;</span>
  </Footer>
)

// styled.(tag HTML)
const Footer = styled.footer`
  & span {
    color: red;
    margin-left: 5px;
  }

  height: ${footerHeight};

  padding: 3px;
  background: #333;
  text-align: center;
  color: #fff;
`

export default MainFooter
