import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data, setdata] = useState([])
    useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setdata(data)
    })
    }, [])
  return (
    <div className='bg-gray-300 p-5' >GitHub: {data.followers}
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default GitHub