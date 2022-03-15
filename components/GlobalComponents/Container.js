export default function Container({className, children, id}){
    const addClassName = className ? className : "";
    return(
        <section id={id} className={`container sm:px-4 px-6 ${addClassName}`}>
            {children}
        </section>
    )
}