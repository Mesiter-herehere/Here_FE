'use client'

import React, { useState, useEffect } from "react";
import * as S from "../styles/Main";
import Nav from "../components/Nav";
import Userdata from "../components/Userdata";

function Main() {
    const [schoolValue, setSchoolValue] = useState("");
    const [userData, setUserData] = useState(null);
    const [logined, setLogined] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            // 토큰이 로컬 스토리지에 존재하면 logined를 true로 설정
            setLogined(true);
            fetchUserData();  // 백엔드에서 유저 데이터를 받아오는 함수 호출
        } else {
            setLogined(false);
        }
    }, []);

    const fetchUserData = async () => {
        try {
            // 유저 데이터를 백엔드에서 가져오는 API 호출
            const response = await fetch('/api/userdata');  // 실제 백엔드 API 경로로 변경
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.log("유저 데이터를 불러오는 데 실패했습니다.", error);
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

                    {userData && <Userdata userData={userData} />}
                </>
            ) : (
                <>
                    <S.Title>‘저’를 소개합니다!</S.Title>
                    <br />
                    <S.LightTitle>저를 미리 알고 가면 좋을껄요?</S.LightTitle>
                    <br />
                    <S.assent>로그인 후 서비스를 이용해주세요.</S.assent>
                </>
            )}
        </>
    );
}

export default Main;
