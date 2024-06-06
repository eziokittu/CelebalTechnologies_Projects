import React from 'react'

const DisplayText = ({ headingText, bodyTexts }) => {
  return (
    <div className='flex flex-row gap-4'>
      <p className='sm:text-lg font-bold underline'>{headingText}:</p>
      <div className='flex flex-row gap-2 text-lg sm:text-xl'>
        {bodyTexts.map((t, num) => (
          <p>{t}</p>
        ))}
      </div>
    </div>
  )
}

export default DisplayText