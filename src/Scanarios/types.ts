import { TestNodesNames } from './TestScenario/nodes'

export enum CommandsTypes {
  changeNode,
  async,
  changeNodeWithMsg,
}

export type Command<NodeNames> =
  | GoToCommand<NodeNames>
  | AsyncCommand<NodeNames>

export type GoToCommand<NodeNames> = {
  type: CommandsTypes
  name: string
  to: NodeNames
}

export type AsyncCommand<NodeNames> = {
  type: CommandsTypes
  name: string
  message: string
  callback: () => Promise<Command<NodeNames>>
}

export type ScenarioNode<NodeNames> = {
  message: string
  commands: Command<NodeNames>[]
}

export type Scenario<NodeNames extends TestNodesNames> = {
  [name in NodeNames]: ScenarioNode<NodeNames>
}
