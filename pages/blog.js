import React from 'react'
import anime from 'animejs'

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Head from "../components/Head.js"
import config from "../config/data.config.js"
import "../style/blog.sass"

const are = ["inventors", "dreamers", "the future", "engineers", "students", "leaders", config.name]

export default class Blog extends React.Component {
  render = _ => (
    <div className="blog">
      <Head />
      <Header />
      <div className="posts">
        { config.blog.posts.map((post, i) => (
          <a href={ post.url }>
            <div className="card">
              <h1>{ post.title }</h1>
              <p>{ post.preview }</p>
            </div>
          </a>
        )) }
      </div>
      <Footer />
    </div>
  )
}
