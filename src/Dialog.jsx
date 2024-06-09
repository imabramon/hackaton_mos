import React from 'react'
import styled from 'styled-components'
import MessageInput from './MessageInput'
import MessageList from './MessageList'
import { FromTypes } from './Message'
import useChatBot from './useChatBot'

const DialogWindow = styled.div`
  width: 500px;
  height: 98vh;
  background-color: grey;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-rows: 1fr 50px;
`

const MockData = [
  { from: FromTypes.bot },
  { from: FromTypes.user },
  { from: FromTypes.bot },
]

const MockCommands = [
  'Говно',
  'Залупа',
  'Пенис',
  'Хер',
  'Давалка',
  'Хуй',
  'Блядина',
  'Говно',
  'Залупа',
  'Пенис',
  'Хер',
  'Давалка',
  'Хуй',
  'Блядина',
]

const Dialog = () => {
  const { messages, dispatchCommand, dispatchMessage } = useChatBot()

  //   const dispatchCommand = (command) => {
  //     alert(command)
  //   }

  //   console.log(messages)
  return (
    <DialogWindow>
      <MessageList data={messages ?? []} />
      <MessageInput
        commands={MockCommands}
        dispatchCommand={dispatchCommand}
        dispatchMessage={dispatchMessage}
      />
    </DialogWindow>
  )
}

export default Dialog
