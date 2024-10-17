'use client';

import React, { useState, useEffect } from "react";
import axios from "axios"; 
import * as S from "../styles/Main";
import Nav from "../components/Nav";
import Userdata from "../components/Userdata";

interface UserData {
    title: string;
    content: string;
    userSchool: string;
    userName: string;
    imageUrl?: string;
}

function Main() {
    const [schoolValue, setSchoolValue] = useState("");
    const [userData, setUserData] = useState<UserData | UserData[]>([]); // 객체 또는 배열로 선언
    const [logined, setLogined] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            setLogined(true);
            fetchUserData(token);
        } else {
            setLogined(false);
        }
    }, []);

    const fetchUserData = async (token: string) => {
        try {
            const response = await axios.get(`https://endlessly-cuddly-salmon.ngrok-free.app/api/self-intro/main`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.status === 200) {
                const data = response.data;

                // 응답 데이터가 배열인지 객체인지 확인하여 처리
                if (Array.isArray(data)) {
                    setUserData(data);
                } else {
                    setUserData([data]); // 배열이 아니면 배열로 변환
                }

                console.log("데이터 get 성공");
                console.log(data);
            }
        } catch (error) {
            console.error("유저 데이터 요청 실패:", error);
        }
    };

    return (
        <>
            <Nav />

            {logined ? (
                <>
                    <S.Title>‘저’를 소개합니다!</S.Title>
                    <br />
                    <S.LightTitle>저를 미리 알고 가면 좋을껄요?</S.LightTitle>

                    <S.schooldiv>
                        <S.schoollist
                            isSelected={schoolValue === "BUSAN_SOFTWARE_MAESTER"} 
                            onClick={() => setSchoolValue("BUSAN_SOFTWARE_MAESTER")}>부산</S.schoollist>
                        <S.schoollist
                            isSelected={schoolValue === "GWANGJU_SOFTWARE_MAESTER"} 
                            onClick={() => setSchoolValue("GWANGJU_SOFTWARE_MAESTER")}>광주</S.schoollist>
                        <S.schoollist
                            isSelected={schoolValue === "DAEJEON_SOFTWARE_MAESTER"} 
                            onClick={() => setSchoolValue("DAEJEON_SOFTWARE_MAESTER")}>대덕</S.schoollist>
                        <S.schoollist
                            isSelected={schoolValue === "DAE_SOFTWARE_MAESTER"} 
                            onClick={() => setSchoolValue("DAE_SOFTWARE_MAESTER")}>대구</S.schoollist>
                    </S.schooldiv>

                    {Array.isArray(userData) && userData.length > 0 && (
                        userData.map((user, index) => (
                            <Userdata key={index} userDatas={user} />
                        ))
                    )}
                </>
            ) : (
                <>
                    <S.Title>‘저’를 소개합니다!</S.Title>
                    <br />
                    <S.LightTitle>저를 미리 알고 가면 좋을껄요?</S.LightTitle>
                    <br />
                    <S.assent href="Signin">로그인 후 서비스를 이용해주세요.</S.assent>
                </>
            )}
        </>
    );
}

export default Main;
