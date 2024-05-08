import { Dispatch } from "react"
import { OrderActions } from "../reducers/oderReducer";
import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem  ({item, dispatch} : MenuItemProps) {
  
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg rounded-lg flex justify-between w-full" onClick={() => dispatch({type: 'ADD_ITEM', payload: {item}})} >
      <p>{item.name}</p>
      <p className="font-black">${item.price}.00</p>
    </button>
  )
}
