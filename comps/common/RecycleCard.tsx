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

type QueryParams = {
	card:any;
};

const RecycleCard=({card}:QueryParams) => {
  console.log("props==> Recycle",card.image)
  const trash = card;
  return (
		<Card className="Recycle-card" sx={{ width: "100%", height:500, marginLeft:0, backgroundColor:trash.backgroundColor  }}>	
			<CardContent>
			{ card.image==="/globe-13351.png" ?
		       	<div className= "hero"  style={{backgroundImage:`url("${trash.image}")`, backgroundPosition:`top center` , backgroundSize:"cover!important" }}></div>
				   :
				   <div className= "hero"  style={{backgroundImage:`url("${trash.image}")`, backgroundPosition:`center center` , backgroundSize:"fill!important", backgroundRepeat:"no-repeat!important" }}></div>}
			      <div className="desc-review">
                    {trash.content}
				  </div>
			</CardContent>
		</Card>
	);
}

export default RecycleCard