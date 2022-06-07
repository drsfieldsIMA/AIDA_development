import React from 'react'
import Head from 'next/head'
import { Header } from './navigation/Header'
import PropTypes from "prop-types";

type QueryParams = {
	title: string;
	keywords: string;
	descrip: string;
	gsv: string;
	children: any;
};

export default function Layout({title,keywords,descrip,children}:QueryParams) {
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

export function Heading({ color ,size = "1", content }:{color:string,size:string,content:string}) {
	const VariableHeading: string | any = `h${size}`;
	return<VariableHeading  style={{ color }} >{content}</VariableHeading>;
		}

    Heading.propTypes = {
      size: PropTypes.string,
      content: PropTypes.string.isRequired,
      color: PropTypes.string,
      classNameString: PropTypes.string,
      VariableHeading: PropTypes.node,
      articles: PropTypes.any,
    };
    
    Layout.defaultProps = {
      title: " Greencycle | Recycle Upcycle Repurpose  ",
      descrip: "",
      keywords: " ",
      gsv: "wenrVQYITXvXIH9sNnSmiBaOZ941XPPzAvnupQrq6RQ",
    };
