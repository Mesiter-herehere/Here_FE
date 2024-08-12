'use client'

import React, { useState } from "react";
import Router from "next/navigation";
import * as S from "../styles/Userdata";
import axios from "axios";

function Userdata(){
    return(
        <>
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

export default Userdata;