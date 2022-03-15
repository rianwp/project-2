import SkillBox from "./SkillBox";

export default function SkillsBody(){
    return(
        <>
        <section className="flex flex-wrap py-8 justify-center">
            <SkillBox logo="./python.svg" level="Average">Python</SkillBox>
            <SkillBox logo="./js.svg" level="Beginner">Javascript</SkillBox>
            <SkillBox logo="./react.svg" level="Beginner">React</SkillBox>
            <SkillBox logo="./flask.svg" level="Average">Flask</SkillBox>
        </section>
        </>
    )
}