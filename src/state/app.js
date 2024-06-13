import { FromTypes } from '../Message'
import { TestNodesNames } from '../Scanarios/TestScenario/commands'

export const appReducer =
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
        //console.log(to)
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

export const ActionTypes = {
  addMessage: 'addMessage',
  changeNode: 'changeNode',
  changeNodeWithMsg: 'changeNodeWithMsg',
}

export const AppInitState = (
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

const messageFromBot = (msg) => ({
  type: ActionTypes.addMessage,
  payload: { from: FromTypes.bot, text: msg },
})

const messageFromUser = (msg) => ({
  type: ActionTypes.addMessage,
  payload: { from: FromTypes.user, text: msg },
})

const changeNode = (node) => ({
  type: ActionTypes.changeNode,
  payload: { to: node },
})

export const appActions = {
  messageFromBot,
  messageFromUser,
  changeNode,
}
