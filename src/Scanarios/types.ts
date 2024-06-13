import { TestNodesNames } from './TestScenario/commands'

export enum CommandsTypes {
  changeNode,
  async,
  changeNodeWithMsg,
}

type BaseCommand = {
  type: CommandsTypes
  name: string
}

type OtherCommands<NodeNames> = GoToCommand<NodeNames> | AsyncCommand<NodeNames>

export type Command<NodeNames> = BaseCommand & OtherCommands<NodeNames>

export type GoToCommand<NodeNames> = {
  to: NodeNames
}

export type AsyncCommand<NodeNames> = {
  message: string
  callback: () => Promise<Command<NodeNames>>
}

export type ScenarioNode<NodeNames> = {
  message: string
  commands: Command<NodeNames>[]
  nextNode?: NodeNames
} & (AnswerNode | {})

export type AnswerNode = {
  validation: () => string
  answerVar: string
  proccesing: () => any
}

export type Scenario<NodeNames extends TestNodesNames> = {
  [name in NodeNames]: ScenarioNode<NodeNames>
}
