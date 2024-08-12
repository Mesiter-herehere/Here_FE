import React from "react";
import * as S from "../styles/Userdata";

interface UserData {
    title: string;
    description: string;
    school: string;
    name: string;
    image?: string;
}
    
interface UserdataProps {
    userData: UserData;
}

function Userdata({ userData }: UserdataProps) {
    return (
        <>
            <S.playerdiv>
                <S.playerTitle>{userData.title}</S.playerTitle>
                <br />
                <S.playerDes>{userData.description}</S.playerDes>

                <S.schoolct>
                    <S.shoolctspan>{userData.school}</S.shoolctspan>
                </S.schoolct>
                <S.namect>
                    <S.namectspan>{userData.name}</S.namectspan>
                </S.namect>

                {userData.image && <S.playerImg src={userData.image} alt="User Image" />}
            </S.playerdiv>
        </>
    );
}

export default Userdata;
