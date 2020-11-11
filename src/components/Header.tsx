import React from 'react'
import { Link } from 'gatsby'

const localStyle = require('../style/header.module.scss')

export default function Header() {
  return (
    <header className={`${localStyle.header}`}>
      <h1 className={`${localStyle.header__title}`}>
        <Link to={'/'}>タイトル</Link>
      </h1>
      
      <nav>
        <ul className={`${localStyle.gnav}`}>
          <li className={`${localStyle.gnav__list}`}>
            <Link to={`/about`} className={`${localStyle.gnav__link}`}>
              about
            </Link>
          </li>
          <li className={`${localStyle.gnav__list}`}>
            <Link to={`/work`} className={`${localStyle.gnav__link}`}>
              work
            </Link>
          </li>
          <li className={`${localStyle.gnav__list}`}>
            <Link to={`/contact`} className={`${localStyle.gnav__link}`}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
