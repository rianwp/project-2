import ProjectsDesc from "./ProjectDesc";
import ProjectSlide from "./ProjectSlide";

export default function ProjectsBody(){
    return(
        <>
        <section className="flex md:flex-row flex-col justify-center space-y-8 md:space-y-0 space-x-0 md:space-x-4 py-8 items-center md:items-start">
            <ProjectsDesc/>
            <ProjectSlide/>
        </section>
        </>
    )
}