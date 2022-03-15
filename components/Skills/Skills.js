import Container from "../GlobalComponents/Container";
import SkillsHeader from "./SkillsHeader";
import SkillsBody from "./SkillsBody";

export default function Skills(){
    return(
        <>
        <section className="bg-gray-100">
            <Container id="skills" className="mx-auto text-center py-20">
                <SkillsHeader/>
                <SkillsBody/>
            </Container>
        </section>
        
        </>
    )
}