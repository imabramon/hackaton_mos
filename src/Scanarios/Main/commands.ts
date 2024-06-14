import { Command, CommandsTypes } from '../types'
import { MainNodeNames } from './types'

export const goTo = (
  name: string,
  node: MainNodeNames
): Command<MainNodeNames> => ({
  type: CommandsTypes.changeNode,
  name,
  to: node,
})

export const goToWithMessage = (
  message: string,
  node: MainNodeNames
): Command<MainNodeNames> => ({
  name: 'Переход',
  type: CommandsTypes.changeNodeWithMsg,
  message,
  to: node,
})

export const goBack = (back: MainNodeNames) => goTo('Назад', back)

export const goToAmount = goTo(
  'Посмотреть остатки',
  MainNodeNames.amountGetDate
)

export const goToForecast = goTo(
  'Получить прогноз',
  MainNodeNames.forecastGetProducts
)

export const goToPurchase = goTo(
  'Получить файл заявки',
  MainNodeNames.purchaseResult
)

export const getAmount: Command<MainNodeNames> = {
  name: 'Получить остаток',
  type: CommandsTypes.async,
  message: 'Загружаем данные...',
  callback: async () => {
    const answer = 'Тестовое сообщение'
    return goToWithMessage(answer, MainNodeNames.start)
  },
}
