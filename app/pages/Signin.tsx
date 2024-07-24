'use client'

import React, { useState } from "react";
import * as S from "../styles/Signin";
import Router from "next/router";
import axios from "axios";

function Signin(){
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handlePasswordChange = (e: any) => {
        setPasswordValue(e.target.value);
    };

    const handleEmailChange = (e: any) => {
        setEmailValue(e.target.value);
    };

    return(
        <>
           <S.Textbox>
                <S.Title>로그인</S.Title>
                <S.description>
                    회원가입에서 입력한 학교 이메일이 ID 입니다.
                </S.description>
            </S.Textbox>

            <S.emailinput value={emailValue} onChange={handleEmailChange} placeholder="아이디를 입력해주세요." />
            <S.psinput value={passwordValue} onChange={handlePasswordChange} placeholder="비밀번호를 입력해주세요." />
        </>
    );
}

export default Signin;