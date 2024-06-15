export const getAmount = (prodcuts, date) => {
  return [
    {
      name: 'Клей',
      amount: '5',
    },
    {
      name: 'Учебники',
      amount: '5',
    },
    {
      name: 'Краска',
      amount: '5',
    },
  ]
}

export const getForecast = (prodcuts) => {
  return [
    {
      name: 'Клей',
      date: '5',
    },
    {
      name: 'Учебники',
      amount: '5',
    },
    {
      name: 'Краска',
      amount: '5',
    },
  ]
}

export const getPurchase = () => {
  return {
    id: 1, //идетнификатор расчета
    lotEntityId: 1, //Идентификатор лота
    CustomerId: 1, //Идентификатор заказчика
    rows: [
      //Строки спецификации
      {
        DeliverySchedule: {
          //График поставки
          dates: {
            end_date: ' ', //Дата окончания поставки
            start_date: ' ', //Дата начала поставки
          },
          deliveryAmount: 1, //Объем поставки
          deliveryConditions: '', //Условия поставки
          year: 1, //Год
        },
        address: {
          //Адрес поставки
          gar_id: ' ', //Идентификатор ГАР
          text: ' ', //Адрес в текстовой форме
        },
        entityId: 1, //Сквозной идентификатор СПГЗ
        id: 1, //Идентификатор (версии) СПГЗ
        nmc: 1, //Сумма спецификации
        okei_code: ' ', //Ед. измерения по ОКЕИ
        purchaseAmount: 1, //Объем поставки
        spgzCharacteristics: [
          //Характеристики СПГЗ. Заполняются в зависимости от типа характеристики в соответствии со структурой справочника СПГЗ
          {
            characteristicName: ' ',
            characteristicSpgzEnums: [{ value: ' ' }],
            conditionTypeId: 1,
            kpgzCharacteristicId: 1,
            okei_id: 1,
            selectType: 1,
            typeId: 1,
            value1: 1,
            value2: 1,
          },
        ],
      },
    ],
  }
}
