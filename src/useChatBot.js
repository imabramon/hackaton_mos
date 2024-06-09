import { act, useReducer } from 'react'
import { FromTypes } from './Message'

const CommandsTypes = {
  start: 'start',
  amountGetDate: 'amountGetDate',
  amountGetProducts: 'amountGetProducts',
  amount: 'amount',
  forecast: 'forecats',
  procurement: 'procurement',
}

const StartNode = {
  commands: [
    {
      name: 'Остатки',
      to: CommandsTypes.amountGetDate,
    },
  ],
}

const GetDateNode = {
  commands: [
    {
      name: 'Назад',
      to: CommandsTypes.start,
    },
  ],
}

const GetProductsNode = {
  commands: [
    {
      name: 'Назад',
      to: CommandsTypes.start,
    },
  ],
}

const chatBotState = {
  [CommandsTypes.start]: StartNode,
}

const ActionTypes = {
  addMessage: 'addMessage',
}

const InitState = {
  messages: [
    { from: FromTypes.bot, text: 'Вечер в хату' },
    { from: FromTypes.user, text: 'Че там с деньгами?' },
    { from: FromTypes.bot, text: 'С каими деньгами?' },
  ],
}

const reducer = (state = InitState, action) => {
  switch (action.type) {
    case ActionTypes.addMessage: {
      // console.log('add mes')
      const { text, from } = action.payload
      const { messages } = state
      return { ...state, messages: [...messages, { text, from }] }
    }
    default: {
      return state
    }
  }
}

const useChatBot = () => {
  const [state, dispatch] = useReducer(reducer, InitState)

  const dispatchCommand = (command) => {
    dispatch({
      type: ActionTypes.addMessage,
      payload: { from: FromTypes.user, text: command },
    })
  }

  const dispatchMessage = (message) => {
    dispatch({
      type: ActionTypes.addMessage,
      payload: { from: FromTypes.user, text: message },
    })
  }

  // console.log('hook', state.messages)

  return { messages: state?.messages, dispatchCommand, dispatchMessage }
}

export default useChatBot
