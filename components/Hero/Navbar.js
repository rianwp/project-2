import { useState } from "react";
import Brand from "./Brand";
import MenuButton from "./MenuButton";
import NavItems from "./Navitems";
import ResponsiveMenu from "./ResponsiveMenu";

export default function Navbar(){
    const [show, setShow] = useState(false);
    return(
        <>
        {show && <ResponsiveMenu>
            <NavItems variant="menu"/>
            <MenuButton variant="close" click={() => setShow(false)}/>
        </ResponsiveMenu>}
        
        <div className="flex justify-between py-8">
            <Brand/>
            <MenuButton click={()=>setShow(true)}/>
            <NavItems variant="normal"/>
        </div>
        </>
    )
}