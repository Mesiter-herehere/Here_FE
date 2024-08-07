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
        </>
    );
}

export default Main;