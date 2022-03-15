export default function NavItem({children, href}){
    return(
        <a href={href} className="text-white opacity-60 font-sans hover:opacity-100 transition duration-200">
            {children}
        </a>
    )
}