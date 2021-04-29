import React from 'react'
//component
import PostItem from '../posts/PostItem'
//css
import '../../pagecss/posts/posts.css'

export default function posts() {
  const posts = [
    {
      upvote: 547,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "Questions about new wallet",
      user: "theindependenceline",
      subreddit: "politics",
      commnet_count: 284,
    },
    {
      upvote: 57,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "Amaging site ever seen",
      user: "site performance",
      subreddit: "sites",
      commnet_count: 284,
    },
    {
      upvote: 47,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "look what made",
      user: "madepeople",
      subreddit: "make",
      commnet_count: 284,
    },
    {
      upvote: 62,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 50
      )}/400/300`,
      title: "happy make",
      user: "makerk",
      subreddit: "make",
      commnet_count: 284,
    }
  ]
  return (
    <div className="posts">
      {
        posts.map(post => (
          <PostItem post={post} />
        ))
      }
    </div>
  )
}
