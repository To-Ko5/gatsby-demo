import React from 'react'

const localStyle = require('../style/footer.module.scss')

export default function Footer() {
  return (
    <footer className={`${localStyle.footer}`}>
      <p className={`${localStyle.footer__title}`}>Footer</p>
    </footer>
  )
}
