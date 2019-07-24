import React from 'react'
import './aside.scss'

const Aside = () => {
  return (
    <aside className='messages'>
      <a href='/'>
        <img
          src='/static/img/ic-twitter.png'
          srcSet='/static/img/ic-twitter@2x.png 2x,
          /static/img/ic-twitter@3x.png 3x'
          alt='Twitter'
        />
      </a>
      <a href='/'>
        <img
          src='/static/img/ic-mail.png'
          srcSet='/static/img/ic-mail@2x.png 2x,
          /static/img/ic-mail@3x.png 3x'
          alt='Mail'
        />
      </a>
    </aside>
  )
}

export default Aside
