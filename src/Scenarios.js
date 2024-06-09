import CommandsTypes from './CommandsType'

const asyncCommand = {
  name: 'Загрузить остаток',
  type: CommandsTypes.async,
  message: 'загружаем данные',
  callback: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          type: CommandsTypes.changeNodeWithMsg,
          message: 'Остатки товара: Танки - 5шт',
          to: 'start',
        })
      }, 2000)
    }),
}

export const TestNodes = {
  start: {
    message: 'Выберите этап',
    commands: [
      {
        type: CommandsTypes.changeNode,
        name: '1',
        to: 'testNode1',
      },
      {
        type: CommandsTypes.changeNode,
        name: '2',
        to: 'testNode3',
      },
      {
        type: CommandsTypes.changeNode,
        name: '3',
        to: 'testNode3',
      },
      asyncCommand,
    ],
  },
  testNode1: {
    message: 'Напишите для этапа 1',
    commands: [
      {
        type: CommandsTypes.changeNode,
        name: '2',
        to: 'testNode2',
      },
      {
        type: CommandsTypes.changeNode,
        name: 'Назад',
        to: 'start',
      },
    ],
  },
  testNode2: {
    message: 'Напишите для этапа 2',
    commands: [
      {
        type: CommandsTypes.changeNode,
        name: '3',
        to: 'testNode3',
      },
      {
        type: CommandsTypes.changeNode,
        name: 'Назад',
        to: 'start',
      },
    ],
  },
  testNode3: {
    message: 'Напишите для этапа 3',
    commands: [
      {
        type: CommandsTypes.changeNode,
        name: '1',
        to: 'testNode1',
      },
      {
        type: CommandsTypes.changeNode,
        name: 'Назад',
        to: 'start',
      },
    ],
  },
}
