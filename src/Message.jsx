import React, { useContext } from 'react'
//import { MessageBox } from 'react-chat-elements'
import UserInfoContext from './UserInfoContext'
import MessageBox from './MessageBox'

export const FromTypes = {
  bot: 'bot',
  user: 'user',
}

const Message = ({ from, type, text }) => {
  switch (from) {
    case FromTypes.bot: {
      return <BotMessage text={text} type={type} />
    }
    case FromTypes.user: {
      return <UserMessage text={text} type={type} />
    }
  }
}

export const makeUserMessage = (text) => {
  return {
    position: 'right',
    type: 'text',
    text,
    date: new Date(),
  }
}

const UserMessage = ({ text }) => {
  const { username } = useContext(UserInfoContext)
  return <MessageBox title={username} text={text} />
}

const BotMessage = ({ text }) => {
  return <MessageBox position="left" title="Чат-бот" text={text} />
}

export default Message
