import { NodeTypes, ScenarioNode } from '../types'

export enum MainNodeNames {
  start,
  amountGetDate,
  amountGetProducts,
  amountResult,
  forecastGetProducts,
  forecastResult,
  purchaseResult,
  purchaseEdit,
}

export const Start: ScenarioNode<MainNodeNames> = {
  type: NodeTypes.BaseNode,
  commands: [],
  message: 'Выберите команду',
}

export const amountGetDate: ScenarioNode<MainNodeNames> = {
  type: NodeTypes.AnswerNode,
  commands: [],
  message: 'Ввведите дату в формате дд.мм.ггг',
  validation: () => true,
  answerVar: 'amountDate',
  nextNode: MainNodeNames.amountGetProducts,
  errorMessage: 'Ввведите дату в формате дд.мм.ггг',
}

export const amountGetProducts: ScenarioNode<MainNodeNames> = {
  type: NodeTypes.AnswerNode,
  commands: [],
  message: 'Ввведите инетересующие товары через запятую',
  validation: () => true,
  answerVar: 'amountProducts',
  nextNode: MainNodeNames.amountGetProducts,
  errorMessage: 'Ввведите инетересующие товары через запятую',
}

// export const amountResult: ScenarioNode<MainNodeNames> = {}
export const forecastGetProducts: ScenarioNode<MainNodeNames> = {
  type: NodeTypes.AnswerNode,
  commands: [],
  message: 'Ввведите инетересующие товары через запятую',
  validation: () => true,
  answerVar: 'forecastProducts',
  nextNode: MainNodeNames.amountGetProducts,
  errorMessage: 'Ввведите инетересующие товары через запятую',
}
// export const forecastResult: ScenarioNode<MainNodeNames> = {}
//export const purchaseResult: ScenarioNode<MainNodeNames> = {}
export const purchaseEdit: ScenarioNode<MainNodeNames> = {
  type: NodeTypes.BaseNode,
  commands: [],
  message: 'Выберите команду',
}
