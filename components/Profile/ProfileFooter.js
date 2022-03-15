import FooterItem from "./FooterItem"

export default function ProfileFooter(){
    return(
        <>
        <section className="py-3 flex justify-center space-x-4 mx-auto">
            <FooterItem to="https://www.instagram.com/rianwpzx" size="w-6 h-6 mr-1" img="instagram.svg">@rianwpzx</FooterItem>
            <FooterItem to="https://github.com/rianwp" img="github.svg">rianwp</FooterItem>
        </section>
        </>
    )
}