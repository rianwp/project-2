import { useState } from "react"
import Button from "../GlobalComponents/Button"

export default function ProjectSlide(){
    const [slide, setSlide] = useState(0)
    const slideImg = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]
    const slideTittle = ["Dashboard", "Barang", "Transaksi", "Riwayat Transaksi", "Profile", "Login"]
    const handleSlidenext = () =>{
        if (slide !== 5){
            setSlide(slide + 1)
        } else {
            setSlide(0)
        }
    }
    const handleSlideprev = () =>{
        if (slide !== 0){
            setSlide(slide - 1)
        } else {
            setSlide(5)
        }
    }
    return(
        <>
        <div className="md:w-6/12 sm:w-10/12 w-full">
            <div className="relative">
                <div className="z-20 w-full opacity-0 transition hover:opacity-100 h-full absolute right-0 top-0 bg-gradient-to-b from-transparent to-black">
                    <h1 className="opacity-100 absolute md:bottom-5 md:left-5 bottom-2 left-2 text-white font-bold md:text-3xl text-2xl">{slideTittle[slide]}</h1>
                </div>
                <img className="z-10 w-full shadow-2xl" src={slideImg[slide]}/>
            </div>
            <Button className="mt-4 mr-1 hover:scale-90 rotate-180" click={handleSlideprev}><img src="chevron-right.svg"/></Button>
            <Button className="mt-4 ml-1 hover:scale-90" click={handleSlidenext}><img src="chevron-right.svg"/></Button>
        </div>
        </>
    )
}