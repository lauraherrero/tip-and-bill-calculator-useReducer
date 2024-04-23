export type MenuItem = {
  id: number
  name: string
  price: number
}

export type OrderItem = MenuItem & {
  quantity: number
}

export type OrderItemProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void,
}

export type OrderItemTotalProps = {
  order: OrderItem[],
  tip: number,
  saveOrder: () => void
}

export type TipPercentageFormProps = {
  tip: number,
  setTip: React.Dispatch<React.SetStateAction<number>>
}