import { TestNodesNames } from './TestScenario/commands'

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U

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
  callback: (context: any) => Promise<Command<NodeNames>>
}

export enum NodeTypes {
  BaseNode,
  AnswerNode,
  ContextNode,
}

export type BaseNode<NodeNames> = {
  message: string
  commands: Command<NodeNames>[]
  type: NodeTypes
}

export type OtherNode<NodeNames> = AnswerNode<NodeNames>

export type ScenarioNode<NodeNames> = XOR<
  BaseNode<NodeNames>,
  BaseNode<NodeNames> & OtherNode<NodeNames>
>

export type AnswerNode<NodeNames> = {
  validation: ValidationFn
  answerVar: string
  errorMessage: string
  nextNode: NodeNames
}

export type Scenario<NodeNames extends TestNodesNames> = {
  [name in NodeNames]: ScenarioNode<NodeNames>
}

export type ValidationFn = (input: string) => boolean
