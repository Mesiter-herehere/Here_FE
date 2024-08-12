'use client'

import React, { useState } from "react";
import Router from "next/navigation";
import * as S from "../styles/Main";
import axios from "axios";
import Nav from "../components/Nav";


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

            <S.playerdiv>
                <S.playerTitle>안녕하세요 신희성입니다.</S.playerTitle>
                <br />
                <S.playerDes>저는 node.js fastapi로 백엔드 조금할 수 있어요 프론트는 Vue.js...</S.playerDes>

                <S.schoolct>
                    <S.shoolctspan>부산소프트웨어마이스터고등학교</S.shoolctspan>
                </S.schoolct>
                <S.namect>
                    <S.namectspan>신희성</S.namectspan>
                </S.namect>

                <S.playerImg src={"/logo.svg"} />
            </S.playerdiv>

        </>
    );
}

export default Main;