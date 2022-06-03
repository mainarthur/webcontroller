import React from 'react'
import { EDITOR_TAB, PREVIEW_TAB } from '../../constants'
import Editor from '../../components/Editor'
import Preview from '../../components/Preview'

type Props = {
  currentTab: number
}

const MainPage = ({ currentTab }: Props) => {
  return (
    <>
      {currentTab === EDITOR_TAB && <Editor />}
      {currentTab === PREVIEW_TAB && <Preview />}
    </>
  )
}

export default MainPage
