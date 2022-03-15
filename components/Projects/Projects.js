import Container from "../GlobalComponents/Container";
import ProjectsBody from "./ProjectsBody";
import ProjectsFooter from "./ProjectsFooter";
import ProjectsHeader from "./ProjectsHeader";

export default function Project(){
    return(
        <>
        <Container id="projects" className="text-center mx-auto py-20">
            <ProjectsHeader/>
            <ProjectsBody/>
            <ProjectsFooter/>
        </Container>
        </>
    )
}