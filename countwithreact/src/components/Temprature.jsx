import React from 'react'

const Temprature = ({celsius}) => {
  return (
    <div>
      {celsius > 100 ? "Its Too Hot" : "Its Cool"}
    </div>
  )
}

export default Temprature
