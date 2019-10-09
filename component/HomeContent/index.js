import React from 'react'
import Newsletter from '../Newsletter'

const HomePage = () => {
  return (
    <>
      <figure className='central-img-desktop'>
        <img
          role='image'
          srcSet='/static/img/iphones-final@2x.png 2x,
          /static/img/iphones-final@3x.png 3x'
          src='/static/img/iphones-final.png'
          alt='Iphones'
        />
      </figure>
      <div className='content'>
        <figure>
          <img className='logo' src='/static/img/contoso.svg' />
        </figure>
        <figure className='central-img-mobile'>
          <img
            srcSet='/static/img/phones-mobile@2x.png 2x,
            /static/img/phones-mobile@3x.png 3x'
            src='/static/img/phones-mobile.png'
            alt='Iphones'
          />
        </figure>
        <h1 className='descent-primary'>
          Curabitur lobortis d lorem id bibendum ut id consectetur.
        </h1>
        <h2 className='descent-secondary'>
          Vestibulum rutrum quam vitae fringilla tincidunt amet suspendisse nec
          tortor
        </h2>
        <Newsletter />
      </div>
    </>
  )
}

export default HomePage
