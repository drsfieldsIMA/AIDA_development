/** @format */

import Link from "next/link";
import Layout from "../comps/Layout";
import Image from "next/image";

export default function about() {
	return (
		<div>
			<h1 className='page-title'>About Us</h1>
			<div className='splash-image_wrapper'>
				<div className='about-image'>
					<Image
						src='/images/locations.svg'
						alt='earth'
						className='Earth map with markers'
						layout='fill'
					/>
				</div>
			</div>
			<div className='heading-block_wrapper'>
				<div className='heading-block'>
					<div className='splash-text-container d-none_lg'>
						<p className='splash-text'>
							GreenCycle was founded by Shaun and Mark Fields with the ultimate
							aim of reducing the number of automobile journeys and the number
							of salvageable goods sent to landfill.
						</p>
						<p>
							By opening up the mission through the world wide web to our global
							users we hope to save even more journeys and more goods sent to
							landfill. With the added incentive of saving our GreenCycle users
							money and time. We believe a win, win situation. Going Green means
							saving more of what you value.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
