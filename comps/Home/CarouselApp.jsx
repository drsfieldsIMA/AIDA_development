import { ViewCarouselTwoTone } from '@material-ui/icons';
import { breakpoints } from '@mui/system';
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import assetArr from '../../pages/api/assetArr';
import CardDefault from '../CardDefault';
import Link from 'next/link';

  export  async function getStaticProps() {
//		const res = await fetch(`http://localhost:1337/assets`);
//		const data = await res.json();
	const data=assetArr
		return {
			props: { assets: data },
		};
	}
  
  
function CarouselApp({props}){
  console.log("assets line 26",props.assets)
  const assets=props.assets
/*   const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]; */
//    const items=assetArr;
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow:2, pagination: false },
  { width: 850, itemsToShow: 3, itemsToScroll: 2},
  { width: 1150, itemsToShow: 4, itemsToScroll: 3},
  { width: 1450, itemsToShow: 5,itemsToScroll:4},
  { width: 1750, itemsToShow: 6 ,itemsToScroll:3 },
]
    return (
      <Carousel  breakPoints={breakPoints} style={{marginTop:50}}  >
         {assets &&
					assets.map((post) => (
        <Link href={`/${post.Slug}`} key={post.Slug} >
        <a key={post.Slug}>
     <CardDefault  props={post} key={post.Slug} />
        </a>
        </Link>
        ))}
      </Carousel>
    )
  }


  export default CarouselApp