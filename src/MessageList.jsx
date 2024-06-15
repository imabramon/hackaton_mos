import React from 'react'
import { MessageBox } from 'react-chat-elements'
import styled from 'styled-components'
import Message from './Message'
import MesseageFile from './MessageFile'

const Container = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 10px;
`

const MessageList = ({ data }) => {
  return (
    <Container>
      {data.map(({ from, type, text, ...payload }, index) => (
        <Message key={index} type={type} from={from} text={text} {...payload} />
      ))}
      {/* <MesseageFile name="Файл закупки" /> */}
    </Container>
  )
}

export default MessageList
