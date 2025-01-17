import React from "react";
import * as S from "../styles/Userdata";
import Modal from "./UserModal";

interface UserData {
    title: string;
    content: string;
    userSchool: string;
    userName: string;
    imageUrl?: string;
}

interface UserdataProps {
    userDatas: UserData[];
    onUserClick: (user: UserData) => void;
    onUrgentClick: () => void;
}

function Userdata({ userDatas, onUserClick, onUrgentClick }: UserdataProps) {
    const truncateText = (text: string | undefined) => {
        if (!text) return "";
        return text.length > 10 ? text.slice(0, 10) + "..." : text;
    };

    return (
        <div>
            {userDatas.map((userData, index) => (
                <S.playerdiv key={index}>
                    <S.urgentImg 
                        src="urgent.svg" 
                        onClick={(e) => {
                            e.stopPropagation();
                            onUrgentClick();
                        }}
                    />
                    <div onClick={() => onUserClick(userData)}>
                        <S.playerTitle>{truncateText(userData.title)}</S.playerTitle>
                        <br />
                        <S.playerDes>{truncateText(userData.content)}</S.playerDes>
                        <br />
                        <br />
                        <S.schoolct>
                            <S.shoolctspan>{userData.userSchool}</S.shoolctspan>
                        </S.schoolct>
                        <S.namect>
                            <S.namectspan>{userData.userName}</S.namectspan>
                        </S.namect>

                        {userData.imageUrl && <S.playerImg src={userData.imageUrl} alt="User Image" />}
                    </div>
                </S.playerdiv>
            ))}
        </div>
    );
}

export default Userdata;
