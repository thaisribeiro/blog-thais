import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './header.css'

function HEADER() {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						menuLinks {
              name
              link
            }
					}
				}
			}
		`
	)
	const { menuLinks, title } = site.siteMetadata
	return (
		<header class="main-header">
			<div class="container-header">
				<div class="container-header-children">
					<nav>
						<ul>
							{menuLinks.map(link => (
								<li ey={link.name}>
									<Link style={{ color: `black`, textDecoration: `none`, fontSize: `18px`, fontFamily: `SFMono-Regular', Menlo, Monaco, 'Courier New', Courier, monospace` }} to={link.link}>
										{link.name}
									</Link>
									<hr></hr>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default HEADER
