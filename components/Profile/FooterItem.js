import Button from "../GlobalComponents/Button";

export default function FooterItem({children, img, size, to}){
    const setLocation = (link) => {
        location.href = link
    }
    return(
        <>
        <Button className="font-poppins text-sm" click={()=>{setLocation(to)}} variant="withlogo"><img className={size} src={img}/>{children}</Button>
        </>
    )
}