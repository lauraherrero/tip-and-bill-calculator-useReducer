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

export const orderReducer = (state: OrderState = initialState, action: OrderActions ) => {
  if(action.type === 'ADD_ITEM') {

    const itemExist = state.order.find((product) => product.id === action.payload.item.id);
    let updatedOrder : OrderItem[] = [];
    if (itemExist ) {
      updatedOrder = state.order.map( orderItem => orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem )
            
    } else {
      const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
      updatedOrder = [...state.order, newItem];
    }

    return {
      ...state,
      order: updatedOrder
    }
  }
  if(action.type === 'REMOVE_ITEM') {
    const updatedOrder = state.order.filter(item => item.id !== action.payload.id);
    return {
      ...state,
      order: updatedOrder
    }
  }
  if(action.type === 'SAVE_ORDER') {
    return {
      ...state,
      order: [],
      tip: 0
    }
  }
  if(action.type === 'SET_TIP') {
    const tip = action.payload.value;
    return {
      ...state,
      tip
    }
  }
  return state;
}