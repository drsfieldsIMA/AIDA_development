import Link from "next/link"
import Layout from "../comps/Layout"

export default function about() {
  return (
    <div>
     <h1>About Us</h1>    
     <Link href="/">Index</Link>
     <p>GreenCycle was founded by Shaun and Mark Fields with the ultimate aim of reducing the number 
       of automobile journeys and the number of salvageble goods sent to landfill. 
     </p>
     <p>
      By opening up the mission through the world wide web to our global users we hope to 
      save even more journeys and more goods sent to landfill.

      With the added incentive of saving our greencycle users money and time.  

      A win, win, win. By all accounts.

      Going Green means saving more of what you value.  

     </p>
    </div>
  )
}
