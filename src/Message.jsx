import React, { useContext } from 'react'
import { MessageBox } from 'react-chat-elements'
import UserInfoContext from './UserInfoContext'

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

const UserMessage = ({ type, text }) => {
  const userInfo = useContext(UserInfoContext)
  const props = {
    title: userInfo.username,
    text: text,
  }
  switch (type) {
    default: {
      return (
        <MessageBox
          position="right"
          title="Чат-бот"
          type="text"
          date={new Date()}
          replyButton={true}
          {...props}
        />
      )
    }
  }
}

const BotMessage = ({ type, text }) => {
  switch (type) {
    default: {
      return (
        <MessageBox
          position="left"
          title="Чат-бот"
          type="text"
          text={text}
          date={new Date()}
          replyButton={true}
        />
      )
    }
  }
}

export default Message
