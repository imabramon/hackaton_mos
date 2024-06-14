import { Scenario } from '../types'
import { AmountGetDate, AmountGetProducts, AmountResult, Start } from './nodes'
import { MainNodeNames } from './types'

export const MainScenario: Scenario<MainNodeNames> = {
  [MainNodeNames.start]: Start,
  [MainNodeNames.amountGetDate]: AmountGetDate,
  [MainNodeNames.amountGetProducts]: AmountGetProducts,
  [MainNodeNames.amountResult]: AmountResult,
  [MainNodeNames.forecastGetProducts]: Start,
  [MainNodeNames.forecastResult]: Start,
  [MainNodeNames.purchaseResult]: Start,
  [MainNodeNames.purchaseEdit]: Start,
}
