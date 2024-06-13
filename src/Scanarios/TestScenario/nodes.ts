import {
  GoToNode1,
  GoToNode2,
  GoToNode3,
  asyncCommand,
  GoBack,
} from './commands'

export const StartNode = {
  message: 'Выберите этап',
  commands: [GoToNode1, GoToNode2, GoToNode3, asyncCommand],
}

export const Stage1Node = {
  message: 'Напишите для этапа 1',
  commands: [GoToNode2, GoBack],
}

export const Stage2Node = {
  message: 'Напишите для этапа 2',
  commands: [GoToNode3, GoBack],
}

export const Stage3Node = {
  message: 'Напишите для этапа 3',
  commands: [GoToNode1, GoBack],
}
