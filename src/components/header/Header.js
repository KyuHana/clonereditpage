import React from 'react'
import '../../commoncss/header/header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <ul>
          <li><a href="/r/popular" className="active">Popular</a></li>
          <li><a href="/r/hot">hot</a></li>
          <li><a href="/r/rising">rising</a></li>
          <li><a href="/r/controversial">controversial</a></li>
          <li><a href="/r/glided">Glided</a></li>
        </ul>
      </div>
      <div className="header__right">
        <i className="fas fa-bell"/>
        <img src="" />
        <div className="header__user">
          <span>Amir Vhora</span>
          <i className="fas fa-caret-down" />
        </div>
      </div>
    </div>
  )
}
