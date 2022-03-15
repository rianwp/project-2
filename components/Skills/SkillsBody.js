import SkillBox from "./SkillBox";

export default function SkillsBody(){
    return(
        <>
        <section className="flex flex-wrap py-8 justify-center">
            <SkillBox logo="./python.svg" level="Menengah">Python</SkillBox>
            <SkillBox logo="./js.svg" level="Pemula">Javascript</SkillBox>
            <SkillBox logo="./react.svg" level="Pemula">React</SkillBox>
            <SkillBox logo="./flask.svg" level="Menengah">Flask</SkillBox>
        </section>
        </>
    )
}