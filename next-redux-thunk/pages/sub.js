import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Counter from '../components/counter'
import Link from 'next/link'

const Sub = props => {

  return (
    <div>
        <Link href="/"><a>main</a></Link>
        <Counter />
    </div>
  )
}


export default connect()(Sub)
