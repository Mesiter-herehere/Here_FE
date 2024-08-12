'use client'

import React, { useState } from "react";
import Router from "next/navigation";
import * as S from "../styles/Main";
import axios from "axios";
import Nav from "../components/Nav";
import Userdata from "../components/Userdata";


function Main(){
    const [schoolValue, setSchoolValue] = useState("");

    return(
        <>
            <Nav />
            <S.Title>‘저’를 소개합니다!</S.Title>
            <br />
            <S.LightTitle>저를 미리 알고 가면 좋을껄요?</S.LightTitle>
            {/* <br />
            <S.assent>로그인 후 이용해주세요</S.assent> */}

            <S.schooldiv>
                <S.schoollist
                    isSelected={schoolValue === "부산소프트웨어마이스터고등학교"} 
                    onClick={() => setSchoolValue("부산소프트웨어마이스터고등학교")}>부산</S.schoollist>
                <S.schoollist
                    isSelected={schoolValue === "광주소프트웨어마이스터고등학교"} 
                    onClick={() => setSchoolValue("광주소프트웨어마이스터고등학교")}>광주</S.schoollist>
                <S.schoollist
                    isSelected={schoolValue === "대덕소프트웨어마이스터고등학교"} 
                    onClick={() => setSchoolValue("대덕소프트웨어마이스터고등학교")}>대덕</S.schoollist>
                <S.schoollist
                    isSelected={schoolValue === "대구소프트웨어마이스터고등학교"} 
                    onClick={() => setSchoolValue("대구소프트웨어마이스터고등학교")}>대구</S.schoollist>
            </S.schooldiv>

            <Userdata />

        </>
    );
}

export default Main;