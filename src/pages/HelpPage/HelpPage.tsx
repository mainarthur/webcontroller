import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { StyledTheme } from '../../theme'

const HelpPage = () => {
  return (
    <>
      <Heading variant="h3">Help Page</Heading>
      <Wrapper>
        <WhiteTypography variant="h5">1. Connectiong periphery</WhiteTypography>
        <WhiteTypography variant="body1">
          <p>
            There are 3 main periohery registers you can modify to connect
            buttons, LEDs and potentiometers
          </p>
          <ul>
            <li>SBUTTON</li>
            <li>SLED</li>
            <li>SPMETER</li>
          </ul>
          <p>
            You can connect 8 buttons, 8 LED and 4 potentiometers. The way you
            can do that is chnaging special bits in the init function
          </p>
        </WhiteTypography>
      </Wrapper>
    </>
  )
}

const WhiteTypography = styled(Typography)`
  color: ${({ theme }: StyledTheme) => theme.palette.common.white} !important;
`

const Heading = styled(WhiteTypography)`
  margin: ${({ theme }: StyledTheme) => theme.spacing(3)}px !important;
`

const Wrapper = styled.div`
  height: 100%;
  margin: 8px;
  padding: 8px;
`

export default HelpPage
