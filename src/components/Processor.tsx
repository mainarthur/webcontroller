import React from 'react'
import styled from 'styled-components'

const Processor = () => (
  <>
    <BoardWrapper>
      <Board></Board>
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

const Board = styled.div`
  background-color: green;
  width: 95%;
  height: 50%;
`

export default Processor
