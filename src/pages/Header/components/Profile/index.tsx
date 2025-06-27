import { ProfileContainer, ProfileDescription, ProfileDetails, ProfileHeader, ProfileIcon, ProfileImage, ProfileSocial, ProfileTitle } from "./styles";
import Perfil from "../../../../assets/perfil.jpg"
import { Buildings, GithubLogo, Users } from "phosphor-react";
import { Link } from '../../../../components/Link'

export function Profile() {
    return (
        <ProfileContainer>
            <ProfileImage>
                <img src={Perfil} alt="" />
            </ProfileImage>

            <ProfileDetails>
                <ProfileHeader>
                    <ProfileTitle> Miguel Sales</ProfileTitle>
                    <Link label="GITHUB" />
                </ProfileHeader>
                <ProfileDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem ducimus odit quia quisquam atque sed, vitae excepturi quae cumque?</ProfileDescription>

                <ProfileSocial>
                    <ProfileIcon>
                        <GithubLogo weight="fill" />
                        <p>@salesmiguelz</p>
                    </ProfileIcon>
                    <ProfileIcon>
                        <Buildings weight="fill" />
                        <p>LEVTY</p>
                    </ProfileIcon>
                    <ProfileIcon>
                        <Users weight="fill" />
                        <p>32 seguidores</p>
                    </ProfileIcon>
                </ProfileSocial>

            </ProfileDetails>

        </ProfileContainer >
    )
}