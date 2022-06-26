/** @format */
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import RenderResult from "next/dist/server/render-result";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Header } from "@/comps/navigation/Header";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const Styleguide: NextPage = ({ productfeed }) => {
	const userArray: { name: string } = {
		name: "Nathan D",
	};
	const router = useRouter();
	const trash = productfeed.posts;
	return (
		<>
			<div className='styleguide-nav__wrapper'>
				<li className='styleguide-nav'>
					<a href='#colorpallette'>Color Pallette</a>
					<a href='#typography'>Typography</a>
					<a href='#images'>Images</a>
					<a href='#header'>Header</a>
					<a href='#review'>Review</a>
				</li>
			</div>
			<div className='recycle-container'>
				<h1 className='page-title' id='top'>
					Style Guide
				</h1>
				<h2 className='page-title' id='color-pallette'>
					Color Pallette
				</h2>
				<div className='container-col'>
					<div className='col-32'>
						<Card className='Recycle-card block-1'>
							Primary-green: #8DB942{" "}
						</Card>
					</div>
					<div className='col-32'>
						<Card className='Recycle-card block-2'>
							Secondary-green: #4FAE3C{" "}
						</Card>
					</div>
					<div className='col-32'>
						<Card className='Recycle-card block-3'> Dark-green:#4C7041</Card>
					</div>
				</div>
				<div className='container-col'>
					<div className='col-32'>
						<Card className='Recycle-card block-4'>blue: #497EC0 </Card>
					</div>
					<div className='col-32'>
						<Card className='Recycle-card block-5'>light green: #E1EABE </Card>
					</div>
					<div className='col-32'>
						<Card className='Recycle-card block-6'>Red: #F04923</Card>
					</div>
				</div>
				<div className='recycle-container'>
					<h2 className='page-title' id='typography'>
						Typography
					</h2>
					<div className='container-col'>
						<div className='col-32'>
							<Card className='Recycle-card block-7'>
								<h1>font-family: "protipo", sans-serif </h1>
								<h1>1rem=12.5px</h1>
								<h1>Heading 1:clamp(1.25rem, -0.475rem + 8.333vw, 3.75rem);</h1>
							</Card>
						</div>
						<div className='col-32'>
							<Card className='Recycle-card block-7'>
								<h2>Heading 2:clamp(1rem, -0.475rem + 8.333vw, 3rem);</h2>
								<h3>
									Heading 3: font-size: clamp(0.95rem, -0.475rem + 8.333vw,
									2.5rem);
								</h3>
								<h4>
									Heading 4: font-size: clamp(0.5rem, -0.475rem + 8.333vw,
									1.5rem);
								</h4>
								<p>Paragraph:font-size: clamp(24px, 12px + 0.0333px, 28px);</p>
								<a>anchor links</a>
							</Card>
						</div>
						<div className='col-32'>
							<Card className='Recycle-card block-7'>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</Card>
						</div>
					</div>
				</div>
				<h2 className='page-title' id='images'>
					Images
				</h2>
				<div className='container-col'>
					<div className='col-32'>
						<div className='img-wrapper'>
							<Image
								src='/logo-3.svg'
								className='logo'
								width={70}
								height={70}
								sizes='cover'
								alt='GreenCycle logo'
							/>
							<p>For all devices and screen sizes the logo in the header is</p>
							<p>width=70px</p>
							<p>height=70px</p>
						</div>
					</div>
					<div className='col-32'>
						<Image
							src='/truck.svg'
							className='truck'
							width={250}
							height={250}
							sizes='cover'
							alt='GreenCycle Truck'></Image>
						<p>For all devices and screen sizes the truck is</p>
						<p>width=250px</p>
						<p>height=250px</p>
					</div>
					<div className='col-32'>
						<div>
							<Image
								src='/globe-2.png'
								width={350}
								height={350}
								sizes='cover'
								alt='GreenCycle Globe'></Image>
						</div>
						<div className='text-block'>
							<p>For desktop the globe is</p>
							<p>width=400px</p>
							<p>height=400px</p>
							<p>For tablet the globe is</p>
							<p>width=350px</p>
							<p>height=350px</p>
							<p>For mobile the globe is</p>
							<p>width=100% of screen width</p>
							<p>height=auto</p>
						</div>
					</div>
				</div>
			</div>
			<h2 className='page-title' id='header'>
				Header
			</h2>
			<div className='header_wrapper'>
				<Header></Header>
			</div>
			<h2 className='page-title' id='productfeed'>
				Product Feed
			</h2>
			<ol>
				<Grid container px={0} marginLeft={0}>
					<div className='offers-search-grid'>
						{trash.map((item): unknown => (
							<li className='pic-links' key={item.post_id}>
								<div className='feed-image__container'>
									<div className='feed-image__wrapper'>
										<div className='feed-image'>
											{item?.photos ? (
												<Image
													src={item.photos[0]?.thumbnail}
													alt={`${item.post_id}`}
													width={360}
													height={360}
												/>
											) : (
												<Image
													src='/logo-3.svg'
													alt='picture of the GreenCycle logo'
													width={360}
													height={360}
												/>
											)}
										</div>
									</div>
								</div>
								<div className='feed-title'>
									<h3>{item.title}</h3>
								</div>
								<div className='feed-button'>
									<a
										href={`/details/${parseInt(item.post_id)}`}
										className='btn-secondary'>
										DETAILS
									</a>
								</div>
							</li>
						))}
					</div>
				</Grid>
			</ol>
			<h2 className='page-title' id='review'>
				Review Section
			</h2>
			<div className='reviews'>
				<div className='review'>
					<div className='head-review'>
						<Image
							src={"/images/avatar-1.jpg"}
							className='img'
							alt='avatar 1'
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
						<input type='text'></input>
					</div>
				</div>
			</div>
		</>
	);
};

export async function getStaticProps({ params }: { params: object | any }) {
	let id = params;

	//const  res=await fetch(`${API_URL}/api/feed`);
	const res = await fetch(
		`https://trashnothing.com/api/v1.2/posts?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=51.50853&longitude=-0.12574&radius=100000&per_page=4`
	);
	console.log("res", res);
	const productfeed = await res.json();

	return {
		props: { productfeed },
	};
}

export default Styleguide;
