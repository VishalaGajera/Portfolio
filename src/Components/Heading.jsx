import React from 'react'

const Heading = (props) => {
  return (
    <>
        <h1 className='pb-3' style={{color:"white"}}>{props.title}</h1>
    </>
  )
}

export default Heading