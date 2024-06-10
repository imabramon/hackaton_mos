import CommandsTypes from './CommandsType'

type Command<NodeNames> = GoToCommand<NodeNames> | AsyncCommand<NodeNames>

type GoToCommand<NodeNames> = {
  type: CommandsTypes
  name: string
  to: NodeNames
}

type AsyncCommand<NodeNames> = {
  type: CommandsTypes
  name: string
  message: string
  callback: () => Promise<Command<NodeNames>>
}

// type Command<NodeNames> = {
//   name: string;
//   type: CommandsTypes;
//   ... (GoToCommand<NodeNames> | AsyncCommand<NodeNames>)
// };

// type GoToCommand<NodeNames> = {
//   to: NodeNames;
// }

// type AsyncCommand<NodeNames> = {
//   message: string;
//   callback: () => Promise<Command<NodeNames>>
// }

type ScenarioNode<NodeNames> = {
  message: string
  commands: Command<NodeNames>[]
}

export enum TestNodesNames {
  start,
  testNode1,
  testNode2,
  testNode3,
}

type Scenario<NodeNames extends TestNodesNames> = {
  [name in NodeNames]: ScenarioNode<NodeNames>
}

const asyncCommand: AsyncCommand<TestNodesNames> = {
  name: 'Загрузить остаток',
  type: CommandsTypes.async,
  message: 'загружаем данные',
  callback: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Выгрузить остаток',
          type: CommandsTypes.changeNodeWithMsg,
          message: 'Остатки товара: Танки - 5шт',
          to: TestNodesNames.start,
        })
      }, 2000)
    }),
}

const GoToNode1 = {
  type: CommandsTypes.changeNode,
  name: '1',
  to: TestNodesNames.testNode1,
}

const GoToNode2 = {
  type: CommandsTypes.changeNode,
  name: '2',
  to: TestNodesNames.testNode2,
}

const GoToNode3 = {
  type: CommandsTypes.changeNode,
  name: '3',
  to: TestNodesNames.testNode3,
}

const GoBack = {
  type: CommandsTypes.changeNode,
  name: 'Назад',
  to: TestNodesNames.start,
}

export const TestNodes: Scenario<TestNodesNames> = {
  [TestNodesNames.start]: {
    message: 'Выберите этап',
    commands: [GoToNode1, GoToNode2, GoToNode3, asyncCommand],
  },
  [TestNodesNames.testNode1]: {
    message: 'Напишите для этапа 1',
    commands: [GoToNode2, GoBack],
  },
  [TestNodesNames.testNode2]: {
    message: 'Напишите для этапа 2',
    commands: [GoToNode3, GoBack],
  },
  [TestNodesNames.testNode3]: {
    message: 'Напишите для этапа 3',
    commands: [GoToNode1, GoBack],
  },
}
