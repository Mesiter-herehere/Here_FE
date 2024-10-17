'use client'

import React, { useState } from "react";
import * as S from "../styles/Signin";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function Signin() {
    const router = useRouter();
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [showPassword, setShowPassword] = useState(false); // showPassword 상태 추가

    const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

    const handlePasswordChange = (e : any) => {
        setPasswordValue(e.target.value);
    };

    const handleEmailChange = (e : any) => {
        setEmailValue(e.target.value);
    };

    const backpage = (e : any) => {
        router.push("/");
    }

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const dto = {
            email: emailValue,
            password: passwordValue,
        };

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/api/auth/login`, dto, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            if (response.status === 200) {
                const { access, refresh } = response.data;

                localStorage.setItem("access_token", response.data);
                localStorage.setItem("refresh_token", response.data);

                setTimeout(() => onSilentRefresh(access), JWT_EXPIRY_TIME - 60000);
                router.push("/");
            }
        } catch (error) {
            console.log("로그인 실패:", error);
        }
    };

    // 토큰 갱신
    const onSilentRefresh = async (accessToken: string) => {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/auth/refresh`,
            { access_token: accessToken },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
    
          if (response.status === 200) {
            // 응답 데이터에서 토큰 추출
            const { access, refresh } = response.data; // 최상위 키에서 직접 추출
    
            // localStorage에 토큰 저장
            localStorage.setItem("access_token", access);
            localStorage.setItem("refresh_token", refresh);
    
            // 토큰 갱신 예약 호출
            setTimeout(() => onSilentRefresh(access), JWT_EXPIRY_TIME - 60000);
          }
        } catch (error: any) {
          console.error("Error while refreshing token:", error);
        }
      };

    return (
        <>
            <S.backspan onClick={backpage}>← 돌아가기</S.backspan>

            <S.Textbox>
                <S.Title>로그인</S.Title>
                <S.description>
                    회원가입에서 입력한 학교 이메일이 ID 입니다.
                </S.description>
            </S.Textbox>

            <S.emailinput value={emailValue} onChange={handleEmailChange} type="email" placeholder="아이디를 입력해주세요." />
            <S.PasswordWrapper>
                <S.psinput 
                    value={passwordValue} 
                    onChange={handlePasswordChange} 
                    type={showPassword ? "text" : "password"}
                    placeholder="ex) password" 
                />
                <S.IconWrapper onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                </S.IconWrapper>
            </S.PasswordWrapper>

            <S.Loginbutton type="submit" onClick={handleSubmit}>로그인</S.Loginbutton>
        </>
    );
}

export default Signin;
