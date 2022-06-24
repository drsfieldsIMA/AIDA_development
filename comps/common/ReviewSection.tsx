/** @format */

import React from "react";
import Card from "@mui/material/Card";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ReviewSection = () => {
	return (
		<div className='rev-section'>
			<h2 className='title'>Our Users Love Us</h2>
			<p className='note'>
				Over 3000 users from 60 locations use GreenCycle and keep us recycling
			</p>

			<div className='reviews'>
				<div className='review'>
					<div className='head-review'>
						<Image
							src='/images/avatar-1.jpg'
							className='img'
							alt='GreenCycle logo '
							width={250}
							height={250}
						/>
					</div>
					<div className='body-review'>
						<div className='name-review'>Nathan D.</div>
						<div className='place-review'>Germany</div>
						<div className='rating'>
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</div>
						<div className='desc-review'>
							I use the product all the time at zero expense.
						</div>
					</div>
				</div>
				<div className='review'>
					<div className='head-review'>
						<Image
							src='/images/avatar-2.jpg'
							className='img'
							alt='avatar 2'
							width={250}
							height={250}
						/>
					</div>
					<div className='body-review'>
						<div className='name-review'>Mary Will</div>
						<div className='place-review'>Paris</div>
						<div className='rating'>
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</div>
						<div className='desc-review'>
							Found new loving homes for everything in my loft at zero expense.
						</div>
					</div>
				</div>
				<div className='review'>
					<div className='head-review'>
						<Image
							src={"/images/avatar-3.jpg"}
							className='img'
							alt='avatar 3'
							width={250}
							height={250}
						/>
					</div>
					<div className='body-review'>
						<div className='name-review'>Kevin Tuck</div>
						<div className='place-review'>New York</div>
						<div className='rating'>
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</div>
						<div className='desc-review'>
							Managed to kit out my pad at minimum expense.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewSection;
