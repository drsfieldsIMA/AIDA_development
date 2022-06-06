import Typography from "@mui/material/Typography";

const Hero=({props}:{props:any}) =>{
  console.log("props final==>",props)
  return(
  <div className= "hero"  style={{backgroundImage:`url("${props.imageSrc}")`, backgroundPosition:`no-repeat center center`,backgroundRepeat:`${props.bgRepeat}` ,backgroundSize:`${props.bgSize}`}}>
   </div>
)
}
export default Hero