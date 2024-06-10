import { Scenario } from '../types'
import {
  TestNodesNames,
  GoToNode1,
  GoToNode2,
  GoToNode3,
  asyncCommand,
  GoBack,
} from './nodes'

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
