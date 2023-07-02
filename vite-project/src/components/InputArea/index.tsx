import { useState } from 'react'
import { Item } from '../../types/Item'
import * as C from './styled'

type Props = {
    onAdd: (item:Item) => void
}

const InputArea = ({onAdd}:Props) => {
    const [data, setData] = useState('');
    const [optionSelect, setOption] = useState('');
    const [title, setTitle] = useState('');
    const [valoritem, setValor] = useState(0);


    const handleAddevent = () => {
        let newItem:Item = {
            date: new Date(data),
            category: optionSelect,
            title,
            value: valoritem
        }
        onAdd(newItem)
    }
    return (
       <C.Container>
        <input type="date" value={data} onChange={(e)=> setData(e.target.value)}/>
        <label>Categoria</label>
        <select name="categoria"  onChange={(e)=> setOption(e.target.value)}>
            <option value=""></option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="salary">Salary</option>
        </select>
        <label>Titulo</label>
        <input value={title}  onChange={(e)=> setTitle(e.target.value)} type="text" />
        <label>Valor</label>
        <input value={valoritem}  onChange={(e)=> setValor(parseInt(e.target.value))} type="number" />
        <button  onClick={handleAddevent}>Adicionar</button>
       </C.Container>
    )
}

export default InputArea