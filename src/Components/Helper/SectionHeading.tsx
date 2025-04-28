import React from 'react'

type Props = {
    Heading: string,
    paregraph:string
}

const SectionHeading = ({Heading, paregraph} : Props) => {
  return (
    <div className='w-[80%] mx-auto'>
       
        <p className='text-green-600 text-lg font-semibold'>{paregraph}</p>
        <h1 className='text-4xl font-bold mt-2 mb-6'>{Heading}</h1>
    </div>
  )
}

export default SectionHeading