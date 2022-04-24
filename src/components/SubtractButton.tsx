interface IProps {
  onAdd: () => void
}

export const SubtractButton = ({onAdd}: IProps) => {
  return <button onClick={onAdd}>-</button>
}
