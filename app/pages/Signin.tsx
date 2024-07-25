'use client'

import React, { useState } from "react";
import * as S from "../styles/Signin";
import { useRouter } from "next/navigation";
import axios from "axios";

function Signin() {
    const router = useRouter();
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

    const handlePasswordChange = (e : any) => {
        setPasswordValue(e.target.value);
    };

    const handleEmailChange = (e : any) => {
        setEmailValue(e.target.value);
    };

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const dto = {
            email: emailValue,
            password: passwordValue,
        };

        try {
            const response = await axios.post("http://localhost:8000/api/signin", dto, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            if (response.status === 200) {
                const { access, refresh } = response.data;

                localStorage.setItem("access_token", access);
                localStorage.setItem("refresh_token", refresh);

                setTimeout(() => onSilentRefresh(access), JWT_EXPIRY_TIME - 60000);
                router.push("/dashboard");  // 요거만 나중에 바꾸면 끝ㅌ
            }
        } catch (error) {
            console.log("로그인 실패:", error);
        }
    };

    // 토큰 갱신
    const onSilentRefresh = async (accessToken : any) => {
        try {
            const response = await axios.post("http://localhost:8000/api/refresh", { access_token: accessToken }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            if (response.status === 200) {
                const { access } = response.data;

                localStorage.setItem("access_token", access);

                setTimeout(() => onSilentRefresh(access), JWT_EXPIRY_TIME - 60000);
            }
        } catch (error) {
            console.error("토큰 갱신 중 오류 발생:", error);
        }
    };

    return (
        <>
            <S.Textbox>
                <S.Title>로그인</S.Title>
                <S.description>
                    회원가입에서 입력한 학교 이메일이 ID 입니다.
                </S.description>
            </S.Textbox>

            <S.emailinput value={emailValue} onChange={handleEmailChange} type="email" placeholder="아이디를 입력해주세요." />
            <S.psinput value={passwordValue} onChange={handlePasswordChange} type="password" placeholder="비밀번호를 입력해주세요." />

            <S.Loginbutton type="submit" onClick={handleSubmit}>로그인</S.Loginbutton>
        </>
    );
}

export default Signin;