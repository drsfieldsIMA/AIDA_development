/**
 * /* eslint-disable
 *
 * @format
 */

import Image from "next/image";
import Link from "next/link";
const ProductFeed = ({ trashBin }: { trashBin: any }) => {
	const trash = trashBin.posts;
	console.log("product feed trash", trash);
	return (
		<div className='flow-flex-col'>
			<ol className='product-feed'>
				<h2>Current Offers</h2>
				{Object.values(trash).map((item: any, index: any) => (
					<li key={item.title} className='product-feed-item'>
						<div className='product-feed-image__container'>
							{item?.photos ? (
								<Image
									src={item.photos[0]?.thumbnail}
									alt={item.title}
									width={270}
									height={270}
									className='product-feed__image'
								/>
							) : (
								<Image
									src='/globe-2.png'
									alt={item.title}
									width={270}
									height={270}
									className='product-feed__image'
								/>
							)}
						</div>
						{item?.photos ? (
							<Link key={item.name} href={`/details/${parseInt(item.post_id)}`}>
								<a className='btn-tertiary'> Details </a>
							</Link>
						) : (
							""
						)}
					</li>
				))}
			</ol>
		</div>
	);
};

export default ProductFeed;
