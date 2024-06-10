import { act, useReducer } from 'react'
import { FromTypes } from './Message'
import { TestNodes } from './Scanarios/TestScenario'
import { CommandsTypes } from './Scanarios/types'
import { TestNodesNames } from './Scanarios/TestScenario/nodes'

// const CommandsTypes = {
//   start: 'start',
//   amountGetDate: 'amountGetDate',
//   amountGetProducts: 'amountGetProducts',
//   amount: 'amount',
//   forecast: 'forecats',
//   procurement: 'procurement',
// }

const ActionTypes = {
  addMessage: 'addMessage',
  changeNode: 'changeNode',
}

const InitState = (
  Scenario = TestNodes,
  currentNode = TestNodesNames.start
) => ({
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
  (state, action) => {
    //console.log(state)
    switch (action.type) {
      case ActionTypes.addMessage: {
        // console.log('add mes')
        const { text, from } = action.payload
        const { messages } = state
        return { ...state, messages: [...messages, { text, from }] }
      }
      case ActionTypes.changeNode: {
        const { to } = action.payload
        console.log(to)
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

const useChatBot = (Scenario = TestNodes) => {
  const [state, dispatch] = useReducer(reducer(Scenario), InitState(Scenario))

  const dispatchCommand = ({ type = CommandsTypes.changeNode, ...payload }) => {
    switch (type) {
      case CommandsTypes.changeNode: {
        dispatch({
          type: ActionTypes.addMessage,
          payload: { from: FromTypes.user, text: payload.name },
        })
        dispatch({ type: ActionTypes.changeNode, payload })
        return
      }
      case CommandsTypes.async: {
        const { message, callback } = payload
        dispatch({
          type: ActionTypes.addMessage,
          payload: { from: FromTypes.bot, text: message },
        })
        ;(async () => {
          const nextCommand = await callback()
          dispatchCommand(nextCommand)
        })()
        return
      }
      case CommandsTypes.changeNodeWithMsg: {
        const { message } = payload
        console.log(payload)
        dispatch({
          type: ActionTypes.addMessage,
          payload: { from: FromTypes.bot, text: message },
        })
        dispatch({ type: ActionTypes.changeNode, payload })
      }
    }
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
