import { Dispatch } from "react"
import { OrderActions } from "../reducers/oderReducer"

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
  dispatch: Dispatch<OrderActions>
}

export type OrderItemTotalProps = {
  order: OrderItem[],
  tip: number,
  dispatch: Dispatch<OrderActions>
}

export type TipPercentageFormProps = {
  tip: number,
  //setTip: React.Dispatch<React.SetStateAction<number>>
  dispatch: Dispatch<OrderActions>
}