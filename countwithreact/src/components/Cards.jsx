import React from 'react'

const Cards = (props) => {
    return (
        <>
            <div className='w-72 border-2 border-solid'>
                <div className=''>
                    <img src="https://www.hubspot.com/hubfs/how-to-start-coding-1.jpg" alt="" />
                    <h1 className='m-3'>{props.Text}</h1>
                    <p className='m-5'>{props.Description}</p>
                </div>
            </div>
        </>
    )
}

export default Cards
