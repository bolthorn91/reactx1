interface IProps {
  onAdd: () => void
}

export const AddButton = ({onAdd}: IProps) => {
  return <button onClick={onAdd}>+</button>
}