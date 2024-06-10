import { AsyncCommand, Command, CommandsTypes } from '../types'

export enum TestNodesNames {
  start,
  testNode1,
  testNode2,
  testNode3,
}

export const asyncCommand: Command<TestNodesNames> = {
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

export const GoToNode1: Command<TestNodesNames> = {
  type: CommandsTypes.changeNode,
  name: '1',
  to: TestNodesNames.testNode1,
}

export const GoToNode2 = {
  type: CommandsTypes.changeNode,
  name: '2',
  to: TestNodesNames.testNode2,
}

export const GoToNode3 = {
  type: CommandsTypes.changeNode,
  name: '3',
  to: TestNodesNames.testNode3,
}

export const GoBack = {
  type: CommandsTypes.changeNode,
  name: 'Назад',
  to: TestNodesNames.start,
}
