import { TipPercentageFormProps } from "../types"
import { tipOptions } from "../data/db"


export const TipPercentageForm = ({tip, setTip} : TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>
      <form>
        {tipOptions.map(tipOption => (
          <div className="flex gap-2" key={tipOption.id}>
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input type="radio" id={tipOption.id} name="tip" value={tipOption.value} onChange={e => setTip(+e.target.value)} checked={tipOption.value === tip} />
          </div>
        ))}

      </form>
    </div>
  )
}
