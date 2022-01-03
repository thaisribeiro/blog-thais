import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeaderBlog from '../components/header-blog'
import Footer from '../components/footer'

import './sobre.css'

export default function Blog() {
  const { avatar, photo } = useStaticQuery(
    graphql`
    query SobreIndex {
      avatar: file(absolutePath: {regex: "/about.jpg/"}) {
        childImageSharp {
          fixed(width: 1000, height: 1000, quality: 90) {
            base64
            width
            height
            src
            srcSet
          }
        }
      },
      photo: file(absolutePath: {regex: "/thais-sobre.jpg/"}) {
        childImageSharp {
          fixed(width: 1000, height: 1000, quality: 90) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }`
  )

  return (
    <Layout>
      <SEO />
      <HeaderBlog image={avatar.childImageSharp.fixed.src} mensagemtopo="Quem sou eu?" link="/" />
      <div className='sobre'>
        <Image
          fixed={photo.childImageSharp.fixed}
          style={{
            marginBottom: 0,
            minWidth: 250,
            minHeight: 250,
            maxWidth: 250,
            maxHeight: 250,
            marginBottom: '2px',
            borderRadius: 0
          }}
          imgStyle={{
            borderRadius: '50%',
          }}
        />
        <label style={{ fontSize: '10px' }}>Foto: Thais Ribeiro</label>
        <article className="container small">
          <p>
            Oi, meu nome é Thais, tenho 29 anos e sou engenheira de software aspirante em blogueira nas horas vagas.
            Atualmente trabalho no Luizalabs, na equipe de  chatbot da Lu, tenho uma jornada de mais de 8 anos na área transitando em grandes empresas e em grandes projetos. 
            Minhas especialidades incluem desenvolvimento em Python e Javascript. Pesquisadora e entusiasta em Inteligência Artificial.
            Sou Community Leader do frontInUdi, uma comunidade voltada para front-ends de Uberlândia.
        </p>
          <h2>Minha História</h2>
          <p>
            Nasci em Uberlândia, em 1992 e morei pouco tempo em uma cidade pequena chamada Centralina, construí toda a minha vida aqui.
            Me dedico a área de T.I. desde os 16 anos quando ganhei meu primeiro computador e alguns livros do Visual Studio 2005.
        </p>
          <h2>Projetos</h2>
          <p>
            <strong>frontInUdi - </strong> O frontInUdi é uma comunidade de tecnologia com foco em front-end, todo mês organizamos meetups nas empresas anfitriãs, um sonho que nasceu há um tempo atrás com outras pessoas e com um grupo de amigos decidimos continuar.
        </p>
        </article>

      </div>
      <div className="item-footer">
        <Footer />
      </div>
    </Layout >
  )
}

