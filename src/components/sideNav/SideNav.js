import React from 'react'
import '../../pagecss/sideNav/sideNav.css'

export default function SideNav() {
  const menus = [
    { to: '/r/popular', text: 'Popular'},
    { to: '/r/all', text: 'All'},
    { to: '/r/random', text: 'Random'}
  ]
  const subreddits = [
    "askreddit",
    "worldnews",
    "videos",
    "funny",
    "todayilearned",
    "pics",
    "gaming",
    "movies",
    "news",
    "aww",
    "mildlyinteresting",
    "showerthoughts",
    "television",
    "jokes",
    "soccer",
    "interesting",
    "dataisbeautiful"
  ]
  return (
    <div className="sideNav">
      <div className="sideNav__logo">
        <img src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png" />
      </div>
      <div className="sideNav__search"> 
        <input type="text" name="" placeholder="Search" />
        <i className="fas fa-search"></i>
      </div>
      <div className="sideNav__link">
        <ul className="sideNav__menu">
          {
            menus.map(menu => (
              <li><a href={menu.to}>{menu.text}</a></li>
            ))
          }
        </ul>
        <hr />
        <ul className="sidenav__subreddit">
          {subreddits.map(subreddit => (
            <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
          ))}
        </ul>
      </div>
    </div>
  )
}
