import React from 'react'
import styled from 'styled-components'
const url = 'https://telegra.ph/file/9ed485a4d4c747fee6e5b.png'
const url2 = 'https://telegra.ph/file/891ff9329234385eb6e7f.png'
const Processor = () => (
  <>
    <BoardWrapper>
      <Board src={url} />
    </BoardWrapper>
  </>
)

const BoardWrapper = styled.div`
  height: 100%;
  width: 66.7%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Board = styled.img`
  width: 720px;
`

export default Processor
