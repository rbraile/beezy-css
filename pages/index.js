import React, { Component } from 'react'
import '../static/app.scss'

import Aside from '../component/Aside'
import HomeContent from '../component/HomeContent'

class index extends Component {
  render() {
    return (
      <main role='main' className='container'>
        <Aside />
        <HomeContent />
      </main>
    )
  }
}

export default index
