import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../styles/Userdata";

interface UserData {
    title: string;
    content: string;
    userSchool: string;
    userName: string;
    imageUrl?: string;
}

function Userdata() {
    const [userDatas, setUserDatas] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const token = localStorage.getItem("access_token");
                if (!token) {
                    throw new Error("로그인되지 않음");
                }

                const response = await axios.get("https://endlessly-cuddly-salmon.ngrok-free.app/api/self-intro/main", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'ngrok-skip-browser-warning': '69420',
                    },
                });

                const contentType = response.headers["content-type"];
                // 응답이 JSON인지 확인
                if (contentType && contentType.includes("application/json")) {
                    const data: UserData[] = response.data; // 다수의 사용자 데이터로 변경
                    console.log("응답 데이터:", data); // 받은 데이터를 콘솔에 출력
                    setUserDatas(data);
                } else {
                    throw new Error("JSON 형식이 아닌 응답을 받았습니다");
                }
                setLoading(false);
            } catch (error) {
                setError("유저 데이터를 가져오는 데 실패했습니다.");
                console.error("Error fetching user data:", error); // 에러 콘솔 출력
                setLoading(false);
            }
        }

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // 로딩 중 메시지
    }

    if (error) {
        return <div>{error}</div>; // 에러 메시지
    }

    return (
        <div>
            {userDatas.map((userData, index) => (
                <S.playerdiv key={index}>
                    <S.playerTitle>{userData.title}</S.playerTitle>
                    <br />
                    <S.playerDes>{userData.content}</S.playerDes>
                    <br />
                    <br />
                    <S.schoolct>
                        <S.shoolctspan>{userData.userSchool}</S.shoolctspan>
                    </S.schoolct>
                    <S.namect>
                        <S.namectspan>{userData.userName}</S.namectspan>
                    </S.namect>

                    {userData.imageUrl && <S.playerImg src={userData.imageUrl} alt="User Image" />}
                </S.playerdiv>
            ))}
        </div>
    );
}

export default Userdata;
