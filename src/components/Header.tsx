import React from 'react'

const localStyle = require('../style/header.module.scss')

export default function Header() {
  return (
    <header className={`${localStyle.header}`}>
      <h1 className={`${localStyle.header__title}`}>タイトル</h1>
    </header>
  )
}
