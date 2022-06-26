/** @format */

import React from "react";
import Link from "next/link";
import { Heading } from "comps/Layout";
import Image from "next/image";

type QueryParams = {
	trash: any;
};
/* eslint-disable-next-line */
const SplashCard = ({ trash }: QueryParams) => {
	return (
		<>
			<div className='splash-card'>
				<div className='splash-image_wrapper'>
					<div className='splash-image'>
						<Image
							src='/globe-2.png'
							alt='earth as a high resolution image'
							className='earth-img'
							layout='fill'
						/>
					</div>
				</div>
				<div className='heading-block_wrapper'>
					<div className='heading-block'>
						<h1>
							<span className='greentext'>GreenCycle</span>
							<span className='local'> Going Green Starts Local</span>
						</h1>
						<div className='splash-text-container d-none_lg'>
							<p className='splash-text'>
								Ever wondered how we can recycle more through our communities.
								We mean more of you and your networks phones, electrics, clothes
								and furniture recycled through this app. The GreenCycle
								community are here to safeguard and contribute to stewarding the
								Earth`s resources by leveraging the world wide web`s scale.
							</p>
							<Link href='/about'>
								<a className='home-links'>Learn More</a>
							</Link>
						</div>
					</div>
				</div>

				<div className='btn-block_wrapper'>
					<div className='btn-block'>
						<Link href='/offers'>
							<a className='btn-primary'> Current Offers</a>
						</Link>
						<Link href='/login'>
							<a className='btn-primary btn-green'>Make an offer</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default SplashCard;
