import Container from "../GlobalComponents/Container";
import Herotext from "./Herotext";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function Hero(){
    
    
    return(
        <>
        <div className="w-full h-[712px] bg-cover bg-no-repeat bg-bottom bg-[url('hero.png')]">
        <Container className="mx-auto text-center">
            <Navbar/>
            <Herotext/>
        </Container>
        </div>
        </>
    )
}