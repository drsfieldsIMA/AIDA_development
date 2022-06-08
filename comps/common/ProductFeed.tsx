/* eslint-disable */
import Image from "next/image";
import Link from "next/link";
const ProductFeed=({news}:{news:any}) => {
	const trash=news.posts;
console.log("product feed trash",trash)
return (
<div className='flow-flex-col'>
<ol className="product-feed">
{Object.values(trash).map((item:any,index:any) => (
    <li key={item.title} className="product-feed-item">
        	{item.title ? <div className="product-feed-top-arrow">
			<Image src="/greenarrows-2.svg" alt='recycle-sign' width={270} height={120} /></div> :"nothing"}
      	    <div className="product-feed-image__container">{item?.photos ?
			<Image src={item.photos[0]?.thumbnail} alt={item.title} width={270} height={270} className="product-feed__image" />
			:"no-photo"}</div>
	   <Link
		key={item.name}
		href={`/details/${parseInt(item.post_id)}`}>
	     <a className="btn-tertiary"> Details </a>
		</Link>
	
	</li>
))
}
</ol>
</div>
)};

export default ProductFeed;