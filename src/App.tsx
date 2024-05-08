import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import { OrderContents } from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { TipPercentageForm } from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import { initialState, orderReducer } from "./reducers/oderReducer";

function App() {

  const { order, tip, setTip, removeItem, saveOrder } = useOrder();

  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Tips Calculator</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-">
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={state.order} removeItem={removeItem} />
              <TipPercentageForm tip={state.tip} setTip={setTip} />
              <OrderTotals tip={state.tip} order={state.order} saveOrder={saveOrder} />

            </>
          ) : (
            <p className="text-center">La orden está vacía</p> 
          )
          }
        </div>
      </main>
    </>
  )
}

export default App
