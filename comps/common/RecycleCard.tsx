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

const RecycleCard=(props) => {
  console.log("props==> Recycle",props.card.image)
  const card = props.card;
  return (
		<Card className="Recycle-card" sx={{ width: "100%", height:400, marginLeft:0, backgroundColor:card.backgroundColor  }}>	
			<CardContent>
			<div className= "hero"  style={{backgroundImage:`url("${card.image}")`, backgroundPosition:`center center` , backgroundSize:"fill" }}></div>
			      <Typography variant="h1" color={`${card.color}`} className="std-size__font">
                    {card.content}
				  </Typography>
			</CardContent>
		</Card>
	);
}

export default RecycleCard