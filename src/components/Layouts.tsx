import React, { Children } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/layouts.scss'

export default function layouts({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
