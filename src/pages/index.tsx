import React, { useState } from "react"

export default function home() {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">タイトル</h1>
      </header>
      <section className="hero">
        <img src="/images/pic1.jpg" alt="hero" className="hero__img"></img>
      </section>
    </div>
  )
}
