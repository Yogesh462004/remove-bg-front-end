import { assets } from "../assets/assests";
import { FOOTER_CONSTANTS } from "../assets/assests";

export function Footer(){
    return(
        <footer className="flex item-center justify-between gap-4 px-4 lg:px-44 py-3">
            <img src={assets.logo} alt="logo" width={32} />
            <p className="flex-1 border-1 border-gray-100 max-sm:hidden">
                &nbsp; &copy;{new Date().getFullYear} @devtalkswithyogesh | All rights reserved.
            </p>
            <div className="flex gap-3">
        {FOOTER_CONSTANTS.map((i)=>(
              <a href={i.url} key={i} target="_blank" rel="noopener noreferer">
                <img src={i.logo} alt="logo" width={32} />
              </a>
        
        ))}
      </div>
      <p className="text-center text-gray-700 font-medium"></p>
        </footer>
    )
}