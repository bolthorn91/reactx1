interface IProps {
  onChange: (value: any) => void
}

export const QuantitySelector = ({onChange}: IProps) => {
  return (
    <select onChange={onChange} name="quantity" id="quantity">
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
    </select>
  )
}