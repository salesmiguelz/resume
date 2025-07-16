import { ProfileContainer, ProfileDescription, ProfileDetails, ProfileHeader, ProfileIcon, ProfileImage, ProfileSocial, ProfileTitle } from "./styles";
import { Buildings, GithubLogo, Users } from "phosphor-react";
import { Link } from "../../../../../../components/Link";
import { useContext } from "react";
import { UserContext } from "../../../../../../contexts/UserContext";

export function Profile() {
    const { userData } = useContext(UserContext)
    return (
        <ProfileContainer>
            <ProfileImage>
                <img src={userData.user.avatar_url || undefined} alt="" />
            </ProfileImage>

            <ProfileDetails>
                <ProfileHeader>
                    <ProfileTitle>{userData.user.name}</ProfileTitle>
                    <Link label="GITHUB" url={userData.user.html_url} />
                </ProfileHeader>
                <ProfileDescription>{userData.user.bio}</ProfileDescription>
                <ProfileSocial>
                    <ProfileIcon>
                        <GithubLogo weight="fill" />
                        <p>@{userData.user.login}</p>
                    </ProfileIcon>
                    <ProfileIcon>
                        <Buildings weight="fill" />
                        <p>{userData.user.company ?? "-"}</p>
                    </ProfileIcon>
                    <ProfileIcon>
                        <Users weight="fill" />
                        <p>{userData.user.followers} seguidores</p>
                    </ProfileIcon>
                </ProfileSocial>

            </ProfileDetails>

        </ProfileContainer >
    )
}