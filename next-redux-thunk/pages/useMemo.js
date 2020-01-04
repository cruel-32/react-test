import React, { useState, useMemo } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

const UseMemo = props => {
  console.log('UseMemoComp Render')
  const [number, setNumber] = useState(0)
  const [numberList, setNumberList] = useState([0])

  const changeNumber = e => {
    setNumber(e.target.value)
  }

  const addNumber = () => {
    setNumberList([...numberList,number])
  }

  const reset = () => {
    setNumberList([])
  }

  const total = useMemo(()=> getTotal(numberList),[numberList])

  return (
    <div>
        <Link href="/"><a>main</a></Link>
        <div>
          <ul>
            {
              numberList.map((n,i)=><span key={i}>{n},</span>)
            }
          </ul>
          <input type="number" onChange={changeNumber} value={number} />
          <button onClick={addNumber}>add</button>
          <button onClick={reset}>reset</button>

          <div>total : {total}</div>

        </div>
    </div>
  )
}

const getTotal = numberList => {
  console.log('getTotal')
  return numberList.reduce((num,n)=>num+=(+n), 0)
}

export default connect()(UseMemo)
