import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import dayjs from 'dayjs';
import Hero from './Hero';
import ButtonLink from "./ButtonLink"
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { Heading } from 'comps/Layout';
import Image from 'next/image';

const SplashCard=(props) => {
  console.log("props==> Recycle",props)
  const card = props.card;
  return (
      <>
    <div  className="splash-card">
    <div className='col-1'>
        <div className="heading-block">
   <h1><span className="greentext">GreenCycle</span> Going <span className="greentext">Green</span> Goes <span className="local">Local</span></h1>
         <p>The Greencycle community are here to safeguard and contribute to stewarding the aerths resources
             we ask that you contribute as much as you take
         </p>
         </div>
         <div className="btn-block">
     <a href="/offers" className="btn-primary">Offer</a> 
     <a href="/search" className="btn-primary" style={{backgroundColor:"#4EAE3C!important"}}>Request</a> 
         </div> 
   </div>
   <div className='col-2'>
   <Image src='/marker.svg' alt='earth' width={180} height={180} />
   <div className="splash-image" >
   <Image src='/globe.svg' alt='earth' width={360} height={360} />
   </div>
   </div>
   </div>
   <div className='post-title-block'>
   <div className="email-block">
      <h3>Newsletter</h3>
      <input type="email" placeholder='joebloggs@domain.co.uk' className='email-newsletter'></input>
  </div>
  </div>
  </>
    );
}

export default SplashCard