import Container from "../GlobalComponents/Container";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";
import ProfileFooter from "./ProfileFooter";

export default function Profile(){
    return(
        <>
        <Container id="profile" className="mx-auto text-center py-20">
            <ProfileHeader/>
            <ProfileBody/>
            <ProfileFooter/>
        </Container>
        </>
    )
}