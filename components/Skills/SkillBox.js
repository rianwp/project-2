import SubTittle from "../GlobalComponents/SubTittle";

export default function SkillBox({children, logo, level}){
    return(
        <>
        <div className="sm:w-5/12 p-2 w-full">
            <div className="flex flex-row shadow-xl bg-white py-6 items-center sm:px-2 px-4 rounded-xl hover:scale-95 transition duration-200">
                <img src={logo} className="h-14 mx-1"/>
                <div className="flex-col text-left">
                    <div className="font-poppins font-bold text-xl">
                        {children}
                    </div>
                    <SubTittle>
                        {level}
                    </SubTittle>
                </div>
            </div>
        </div>
        </>
    )
}