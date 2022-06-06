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

const NewsCard=(props) => {
  console.log("props==>",props)
  const card = props.card;

  let position   = card.content.search('https');
  console.log("position==> ", position);
  let lastLetter = card.content.length;
  console.log("lastLetter==> ", lastLetter);
  let result = card.content.substring(position, lastLetter);
  console.log("result==> ", result);
  return (
		<Card className="news-card" sx={{ width: 210, height:400, marginLeft:0 }}>
			
			<CardContent>
			<Link key={card.id} href={`/${card.category?.name}/${card.slug}`}>
           <a>
				<Hero title={card.title} imageSrc={`${result}`} bgColor="transparent" bgSize="contain"/>
				<Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2, lg:3 }} marginTop={{xs:1, sm:2,md:3}}>
				<Grid key={card.id} item xs={6} sm={5} md={3}>
				<Typography variant="h4" color="text.primary" className="std-size__font">
				{dayjs(`${card.date}`).format('DD/MM/YYYY') }
				</Typography>
				</Grid>
				<Grid key={card.id} item xs={6} sm={7} md={9}>
				<ButtonLink href={`/${card.user_id}`} label={`${card.user_id}`} className={"btn-secondary"} > </ButtonLink> 
				</Grid>
				<Grid key={card.id} item xs={12} sm={4} md={3}>
              </Grid>
				<Grid key={card.id} item xs={12} sm={8}  md={9}>
				<Typography variant="p" color="text.primary" className="std-size__font">
                     {card.content}
				</Typography>
				</Grid>
				</Grid>
				</a>
				</Link>
			</CardContent>
		</Card>
	);
}

export default NewsCard