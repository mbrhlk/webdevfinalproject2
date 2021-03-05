import React from 'react'
import '../styles/blog.scss'

import lens from '../img/lens.jpg'
import astronomy from '../img/astronomy.jpg'
import filter from '../img/filter.jpg'
import rocks from '../img/rocks.jpg'

const Posts = () => {
  const posts = [
    {
      title: "Neutral Density Filters",
      img: filter,
      href: "http://google.com"
    },
    {
      title: "Astronomy photography",
      img: astronomy,
      href: "http://google.com"
    },
    {
      title: "The best 2020 lenses",
      img: lens,
      href: "http://google.com"
    },
    {
      title: "Still photography",
      img: rocks,
      href: "http://google.com"
    },
  ]

  return (
    <ul className="posts">
      {posts.map((post, i) => (
        <li key={i}>
          <a href={post.href} target="_blank" rel="noreferrer">
            <figure>
                <img src={post.img} alt={post.title} />
              </figure>
              <h3>{post.title}</h3>
          </a>
        </li>
      ))}
    </ul>
  )
}

const Blog = () => {
  return (
    <div className="wrapper secondary">
      <h2>Blog</h2>
      <Posts />
    </div>
  )
}

export default Blog