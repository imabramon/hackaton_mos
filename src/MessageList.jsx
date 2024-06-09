import React from 'react'
import { MessageBox } from 'react-chat-elements'
import styled from 'styled-components'
import Message from './Message'

const Container = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`

const MessageList = ({ data }) => {
  return (
    <Container>
      {data.map(({ from, type, text }, index) => (
        <Message key={index} type={type} from={from} text={text} />
      ))}
    </Container>
  )
}

export default MessageList
