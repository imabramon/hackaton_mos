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

const chatBotNodes = {
  [CommandsTypes.start]: StartNode,
}

const TestNodes = {
  start: {
    message: 'Выберите этап',
    commands: [
      {
        name: '1',
        to: 'testNode1',
      },
      {
        name: '2',
        to: 'testNode3',
      },
      {
        name: '3',
        to: 'testNode3',
      },
    ],
  },
  testNode1: {
    message: 'Напишите для этапа 1',
    commands: [
      {
        name: '2',
        to: 'testNode2',
      },
      {
        name: 'Назад',
        to: 'start',
      },
    ],
  },
  testNode2: {
    message: 'Напишите для этапа 2',
    commands: [
      {
        name: '3',
        to: 'testNode3',
      },
      {
        name: 'Назад',
        to: 'start',
      },
    ],
  },
  testNode3: {
    message: 'Напишите для этапа 3',
    commands: [
      {
        name: '1',
        to: 'testNode1',
      },
      {
        name: 'Назад',
        to: 'start',
      },
    ],
  },
}

const ActionTypes = {
  addMessage: 'addMessage',
  changeNode: 'changeNode',
}

const InitState = (Scenario = TestNodes, currentNode = 'start') => ({
  messages: [
    { from: FromTypes.bot, text: 'Вечер в хату' },
    { from: FromTypes.user, text: 'Че там с деньгами?' },
    { from: FromTypes.bot, text: 'С каими деньгами?' },
  ],
  currentNode,
  currentCommands: Scenario[currentNode].commands,
})

const reducer =
  (Scenario = TestNodes) =>
  (state = InitState(), action) => {
    switch (action.type) {
      case ActionTypes.addMessage: {
        // console.log('add mes')
        const { text, from } = action.payload
        const { messages } = state
        return { ...state, messages: [...messages, { text, from }] }
      }
      case ActionTypes.changeNode: {
        const { to } = action.payload
        return {
          ...state,
          currentNode: to,
          currentCommands: Scenario[to].commands,
          messages: [
            ...state.messages,
            { from: FromTypes.bot, text: Scenario[to].message },
          ],
        }
      }
      default: {
        return state
      }
    }
  }

const useChatBot = () => {
  const [state, dispatch] = useReducer(reducer(), InitState())

  const dispatchCommand = (nextNode) => {
    dispatch({ type: ActionTypes.changeNode, payload: { to: nextNode } })
  }

  const dispatchMessage = (message) => {
    dispatch({
      type: ActionTypes.addMessage,
      payload: { from: FromTypes.user, text: message },
    })
  }

  // console.log('hook', state.messages)

  return {
    messages: state?.messages,
    commands: state?.currentCommands,
    dispatchCommand,
    dispatchMessage,
  }
}

export default useChatBot
