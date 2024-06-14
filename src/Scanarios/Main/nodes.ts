import { NodeTypes, ScenarioNode } from '../types'
import {
  getAmount,
  goBack,
  goTo,
  goToAmount,
  goToForecast,
  goToPurchase,
} from './commands'
import { MainNodeNames } from './types'

export const Start: ScenarioNode<MainNodeNames> = {
  type: NodeTypes.BaseNode,
  commands: [
    goToAmount,
    goToForecast,
    goToPurchase,
    goTo('тест', MainNodeNames.amountResult),
  ],
  message: 'Выберите команду',
}

export const AmountGetDate: ScenarioNode<MainNodeNames> = {
  type: NodeTypes.AnswerNode,
  commands: [],
  message: 'Ввведите дату в формате дд.мм.ггг',
  validation: () => true,
  answerVar: 'amountDate',
  nextNode: MainNodeNames.amountGetProducts,
  errorMessage: 'Ввведите дату в формате дд.мм.ггг',
}

export const AmountGetProducts: ScenarioNode<MainNodeNames> = {
  type: NodeTypes.AnswerNode,
  commands: [goBack(MainNodeNames.amountGetDate)],
  message: 'Ввведите инетересующие товары через запятую',
  validation: () => true,
  answerVar: 'amountProducts',
  nextNode: MainNodeNames.amountResult,
  errorMessage: 'Ввведите инетересующие товары через запятую',
}

export const AmountResult: ScenarioNode<MainNodeNames> = {
  type: NodeTypes.ExecuteNode,
  execute: getAmount,
  commands: [],
}

export const ForecastGetProducts: ScenarioNode<MainNodeNames> = {
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
export const PurchaseEdit: ScenarioNode<MainNodeNames> = {
  type: NodeTypes.BaseNode,
  commands: [],
  message: 'Выберите команду',
}
