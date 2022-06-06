import Image from "next/image";

const ProductFeed=({news}) => {
	const trash=news.posts;
console.log("product feed trash",trash)
return (
<div className='flow-flex-col'>
<ol className="product-feed">
{Object.values(trash).map((item): any => (
    <li key={item.title} className="product-feed-item">
        	{item.title ? <div className="top-arrow">
			<Image src="/greenarrows-2.svg" alt='recycle-sign' width={360} height={120} /></div> :"nothing"}
      	    <div className="feed-image">{item?.photos ?
			<Image src={item.photos[0]?.thumbnail} alt={item.title} width={360} height={360} />
			:"no-photo"}</div>
       <a key={item.id} href="/single" Parameter={item.id} className="btn-tertiary">Request</a>
    </li>
))
}
</ol>
</div>
)};

export default ProductFeed;