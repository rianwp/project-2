import { useEffect, useState } from "react";
import Container from "../GlobalComponents/Container";

export default function ResponsiveMenu({children}){
    const [transition, setTransition] = useState(false);
    useEffect(()=>{
        setTransition(true);
    },[]);
    const setOpacity = transition ? "opacity-100" : "opacity-0";
    return(
    <>
        <div className={`fixed z-10 bg-black opacity-50 right-0 top-0 w-full h-full`}></div>
        <div className={`w-full bg-gradient-to-r from-indigo-600 to-blue-500 fixed z-20 right-0 top-0 py-8 transition duration-300 rounded-b-xl ${setOpacity}`}>
            <Container className="flex justify-between mx-auto items-start">
                {children}
            </Container>
        </div>
    </>
    )
}