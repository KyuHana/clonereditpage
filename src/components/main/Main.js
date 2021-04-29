import React from 'react';
//css
import '../../pagecss/main/main.css';
//component
import Header from '../../components/header/Header';
import Posts from '../posts/Posts';

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Posts />
    </div>
  )
}
