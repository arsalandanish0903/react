import React, { useEffect, useState } from 'react'

function FetchApi() {
    const [FetchApi, setfetchApi] = useState([]);

    useEffect(() => {
        fetch(' https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(FetchApi => setfetchApi(FetchApi))
    }, [])
    
  return (
    <>
         <div className="card-list">
            {FetchApi.map(item => (
                <div key={item.id} className="card">
                    <span>{item.id}</span>
                    <span>{item.userId}</span>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default FetchApi