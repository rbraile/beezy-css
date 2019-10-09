import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <label htmlFor='search'></label>
      <input
        id='search'
        className='field'
        type='text'
        placeholder='Your O365 email'
      />
      <input className='btn-submit' type='submit' value='send' />
    </div>
  )
}

export default Newsletter
