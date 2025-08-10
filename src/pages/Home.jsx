import { Header } from "../components/Header"
import {BgReomval} from "../components/BgReomval"
import Bgslider from "../components/Bgslider"
import Pricing from "../components/Pricing"
import { Testimonial } from "../components/Testimonials"
import { TryNow } from "../components/Trynow"
import { Footer } from "../components/Footer"

export const Home=()=>{
    return(
        <div>
          <Header/>
          <BgReomval/>
          <Bgslider/>
          <Pricing/>
          <Testimonial/>
          <TryNow/>
        </div>
    )
}