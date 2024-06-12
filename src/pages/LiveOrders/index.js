import React from 'react'
import Orders from './Orders'
import Summary from "./Summary"


const index = () => {
  return (
    <div>
      <div className="jd" style={{ display: 'flex', padding:'30px'}}>
        <Orders/>
        <Summary/>
        </div>
        
      
    </div>
  )
}

export default index
