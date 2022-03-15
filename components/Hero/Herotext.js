import { useState, useEffect } from "react";

export default function Herotext(){
    const [transition, setTransition] = useState(false);
    useEffect(()=>{
        setTransition(true);
    },[]);
    const setOpening = transition ? "translate-y-4 opacity-100" : "opacity-0";
    return(
        <>
        <div className={`mx-auto sm:w-8/12 w-10/12 sm:mt-40 mt-24 text-center transition duration-1000 ${setOpening}`}>
            <h1 className="text-white text-2xl inline-block font-poppins font-semibold tracking-widest">Saya adalah seorang web developer pemula yang sedang belajar dan berkembang hingga saat ini.</h1>
            <p className="mt-6 opacity-60 text-white text-base inline-block font-poppins">Mulai tertarik dan belajar web development saat berumur 18 tahun</p>
        </div>
        </>
    )
}



