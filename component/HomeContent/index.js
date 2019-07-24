import React from 'react'
import './homeContent.scss'
import Newsletter from '../Newsletter'

const HomePage = () => {
  return (
    <section className='section'>
      <figure className='central-img-desktop'>
        <img src='/static/img/iphones-final.png' alt='Iphones' />
      </figure>
      <div className='content'>
        <figure>
          <img className='logo' src='/static/img/contoso.svg' />
        </figure>
        <figure className='central-img-mobile'>
          <img src='/static/img/phones-mobile.png' alt='Iphones' />
        </figure>
        <article className='descent-primary'>
          <h1>Curabitur lobortis d lorem id bibendum ut id consectetur.</h1>
        </article>
        <article className='descent-secondary'>
          <h2>
            Vestibulum rutrum quam vitae fringilla tincidunt amet suspendisse
            nec tortor
          </h2>
        </article>
        <Newsletter />
      </div>
    </section>
  )
}

export default HomePage
