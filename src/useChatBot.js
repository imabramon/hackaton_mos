import { act, useReducer } from 'react'
import { FromTypes } from './Message'
import { TestNodes } from './Scanarios/TestScenario'
import { CommandsTypes } from './Scanarios/types'
import { TestNodesNames } from './Scanarios/TestScenario/commands'
import { ActionTypes, AppInitState, appActions, appReducer } from './state/app'
import { bindActionCreators } from './utils/bindActionCreators'
import {
  chatBotActions,
  chatBotInitState,
  chatBotReducer,
} from './state/chatBot'

const useChatBot = (Scenario = TestNodes) => {
  const [appState, appDispatch] = useReducer(
    appReducer(Scenario),
    AppInitState(Scenario)
  )

  const { messageFromBot, messageFromUser, changeNode } = bindActionCreators(
    appActions,
    appDispatch
  )

  const [chatBotState, chatBotDispatch] = useReducer(
    chatBotReducer,
    chatBotInitState
  )

  const { addVariable } = bindActionCreators(chatBotActions, chatBotDispatch)

  const dispatchCommand = ({ type = CommandsTypes.changeNode, ...payload }) => {
    const { name: commandName } = payload

    switch (type) {
      case CommandsTypes.changeNode: {
        const { to: node } = payload
        messageFromUser(commandName)
        changeNode(node)
        return
      }
      case CommandsTypes.async: {
        const { message, callback } = payload
        messageFromBot(message)
        ;(async () => {
          const nextCommand = await callback(chatBotState)
          dispatchCommand(nextCommand)
        })()
        return
      }
      case CommandsTypes.changeNodeWithMsg: {
        const { message, to: node } = payload
        messageFromBot(message)
        changeNode(node)
        return
      }
    }
  }

  const dispatchMessage = (message) => {
    messageFromUser(message)

    if (Scenario[appState.currentNode].validation) {
      const {
        validation,
        errorMessage,
        nextNode,
        answerVar,
        proccesing = (arg) => arg,
      } = Scenario[appState.currentNode]

      if (validation(message)) {
        addVariable(answerVar, proccesing(message))
        changeNode(nextNode)
        return
      }

      messageFromBot()
      return
    }
  }

  return {
    messages: appState?.messages,
    commands: appState?.currentCommands,
    dispatchCommand,
    dispatchMessage,
  }
}

export default useChatBot
