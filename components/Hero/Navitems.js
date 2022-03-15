import NavItem from "./Navitem";

export default function NavItems({variant}){
    const addVariant = {
        menu:"flex flex-col items-start text-lg space-y-2",
        normal:"sm:flex space-x-8 hidden text-lg"
    };
    const pickedVariant = addVariant[variant];
    return(
        <div className={pickedVariant}>
            <NavItem href="#profile">Profile</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Project</NavItem>
        </div>
    )
}