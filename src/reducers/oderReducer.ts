import { MenuItem, OrderItem } from "../types"

export type OrderActions = {
  type: 'ADD_ITEM',
  payload: { item: MenuItem }
} | {
  type: 'REMOVE_ITEM',
  payload: { id: MenuItem['id'] }
} | {
  type: 'SAVE_ORDER'
} | {
  type: 'SET_TIP',
  payload: { value: number }
}

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState : OrderState = {
  order: [],
  tip: 0
}

export const orderReducer = () => {

}