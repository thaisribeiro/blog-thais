import React from "react"
import { Link } from 'gatsby'
import MenuHeader from '../components/menu'

import './header-blog.css'

export default function HeaderBlog(props) {
  return (
    <div className="header-blog" style={{
      display: 'flex',
      backgroundImage: 'url(' + props.image + ')',
      flexDirection: 'column'
    }}>
      <div className="overlay-posts"></div>
      <div className="item-home-menu">
        <MenuHeader />
      </div>
      <div className="cabecalho">
        <div class="description-blog">
          <h1>
            <Link to={props.link}>«</Link>
            {props.mensagemtopo.toUpperCase() || 'POSTS'}
            <hr style={{ margin: '0 auto' }}></hr>
          </h1>
        </div>

      </div>
    </div>
  )
}