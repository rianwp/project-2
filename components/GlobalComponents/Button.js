export default function Button({children, variant, className, click}){
    const addVariant = {
        black:"bg-black text-white hover:scale-95",
        withlogo:"hover:scale-95 flex items-center"
    }
    const pickedVariant = addVariant[variant];
    const addClassName = className ? className : "";
    return(
        <>
        <button onClick={click} className={`transition font-sans font-semibold ${pickedVariant} ${addClassName}`}>{children}</button>
        </>
    )
}