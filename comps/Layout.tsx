import React from 'react'
import Head from 'next/head'
import { Header } from './navigation/Header'
import PropTypes from "prop-types";

export default function Layout({title,keywords,descrip,children}) {
  return (
    <div>
      <Head>
      <title>{title}</title>
        <meta name='description' content={descrip}></meta>
        <meta name="keywords" content={keywords}></meta>
        </Head>
        <Header></Header>
        <div className="container">
      {children}        
      </div>
    </div>
  )
}

export function Heading({ color ,size = "1", content }) {
	const VariableHeading = `h${size}`;
	return<VariableHeading  style={{ color }} >{content}</VariableHeading>;
		}

Heading.propTypes = {
	size: PropTypes.string,
	content: PropTypes.string.isRequired,
	color:PropTypes.string
};

Layout.defaultProps={
  title:" Greencycle | Going Green Goes Local ",
  descrip:"",
  keywords:""
}
