import { useContext } from 'react'
import UserInfoContext from './UserInfoContext'
import MessageBox from './MessageBox'

export enum FromTypes {
  bot,
  user,
}

interface MessagePropTypes {
  from?: FromTypes;
  type?: string;
  text?: string;
}

const Message = ({ from, type, text }: MessagePropTypes) => {
  switch (from) {
    case FromTypes.bot: {
      return <BotMessage text={text} type={type} />
    }
    case FromTypes.user: {
      return <UserMessage text={text} type={type} />
    }
  }
}

const UserMessage = ({ text }: MessagePropTypes) => {
  const { username } = useContext(UserInfoContext)
  return <MessageBox title={username} text={text} position='right' />
}

const BotMessage = ({ text }: MessagePropTypes) => {
  return <MessageBox position="left" title="Чат-бот" text={text} />
}

export default Message
