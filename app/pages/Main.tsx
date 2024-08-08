'use client'

import React from "react";
import Router from "next/navigation";
import * as S from "../styles/Main";
import axios from "axios";
import Nav from "../components/Nav";


function Main(){
    return(
        <>
            <Nav />
            <S.Title>‘저’를 소개합니다!</S.Title>
            <br />
            <S.LightTitle>저를 미리 알고 가면 좋을껄요?</S.LightTitle>
            <br />
            <S.assent>로그인 후 이용해주세요</S.assent>
        </>
    );
}

export default Main;