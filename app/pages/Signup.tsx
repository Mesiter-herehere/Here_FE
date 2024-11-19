'use client'

import React, { useState } from "react";
import * as S from "../styles/Signup";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function Signup() {
    const router = useRouter();
    const [schoolValue, setSchoolValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [emailFrontValue, setEmailFrontValue] = useState("");
    const [roleValue, setRoleValue] = useState("student");
    const [passwordValue, setPasswordValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const JWT_EXPIRY_TIME = 24 * 3600 * 1000;

    const getEmailDomain = () => {
        switch (schoolValue) {  
            case "GWANGJU_SOFTWARE_MAESTER":
                return "gsm.hs.kr";
            case "BUSAN_SOFTWARE_MAESTER":
                return "bssm.hs.kr";
            case "DAE_SOFTWARE_MAESTER":
                return "dgsm.hs.kr";
            case "DAEJEON_SOFTWARE_MAESTER":
                return "dsm.hs.kr";
            default:
                return "";
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailFrontValue(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value);
    };

    const backpage = (e : any) => {
        router.push("/");
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = `${emailFrontValue}@${getEmailDomain()}`;
        const dto = {
            email,
            name: nameValue,
            password: passwordValue,
            school: schoolValue,
            ROLE_STUDENT: roleValue,
        };

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/api/auth/register`, dto
            );
            if (response.status === 200) {
                router.push("/Write");
            }
        } catch (error) {
            console.log("회원가입 실패:", error);
        }

        try {
            const LoginResponse = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/api/auth/login`, dto, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            if (LoginResponse.status === 200) {
                const { access, refresh } = LoginResponse.data;

                localStorage.setItem("access_token", LoginResponse.data);
                localStorage.setItem("refresh_token", LoginResponse.data);

                setTimeout(() => onSilentRefresh(access), JWT_EXPIRY_TIME - 60000);
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
        <S.Main>
            <S.backspan onClick={backpage}>← 돌아가기</S.backspan>
            <S.Textbox>
                <S.Title>회원가입</S.Title>
                <S.description>
                    실제 내용을 응답해주세요. 본인에게 불이익이 생길 수 있습니다.
                </S.description>
            </S.Textbox>

            <form onSubmit={handleSubmit}>
                <S.school>
                    <S.des>1. 재학 중인 학교를 알려주세요.</S.des>

                    <S.schooloption
                        isSelected={schoolValue === "GWANGJU_SOFTWARE_MAESTER"}
                        onClick={() => setSchoolValue("GWANGJU_SOFTWARE_MAESTER")}
                    >
                        <S.schoolname>광주소프트웨어마이스터고등학교</S.schoolname>
                    </S.schooloption>

                    <S.schooloption
                        isSelected={schoolValue === "BUSAN_SOFTWARE_MAESTER"}
                        onClick={() => setSchoolValue("BUSAN_SOFTWARE_MAESTER")}
                    >
                        <S.schoolname>부산소프트웨어마이스터고등학교</S.schoolname>
                    </S.schooloption>

                    <S.schooloption
                        isSelected={schoolValue === "DAE_SOFTWARE_MAESTER"}
                        onClick={() => setSchoolValue("DAE_SOFTWARE_MAESTER")}
                    >
                        <S.schoolname>대구소프트웨어마이스터고등학교</S.schoolname>
                    </S.schooloption>

                    <S.schooloption
                        isSelected={schoolValue === "DAEJEON_SOFTWARE_MAESTER"}
                        onClick={() => setSchoolValue("DAEJEON_SOFTWARE_MAESTER")}
                    >
                        <S.schoolname>대덕소프트웨어마이스터고등학교</S.schoolname>
                    </S.schooloption>
                </S.school>

                <S.name>
                    <S.des>2. 이름을 알려주세요.</S.des>
                    <S.styledinput value={nameValue} onChange={handleNameChange} type="text" placeholder="ex) 홍길동" />
                </S.name>

                <S.name>
                    <S.des>3. 학교 메일의 앞부분을 입력하세요.</S.des>
                    <S.styledinput
                        value={emailFrontValue}
                        onChange={handleEmailChange}
                        type="text"
                        placeholder={`@${getEmailDomain()}`}
                        disabled={!getEmailDomain()}
                    />
                </S.name>

                <S.name>
                    <S.des>4. 사용할 비밀번호를 입력하세요.</S.des>
                    <S.PasswordWrapper>
                        <S.styledinput 
                            value={passwordValue} 
                            onChange={handlePasswordChange} 
                            type={showPassword ? "text" : "password"} 
                            placeholder="ex) password" 
                        />

                        <S.IconWrapper onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                        </S.IconWrapper>
                    </S.PasswordWrapper>
                </S.name>

                <S.Signbutton type="submit">
                    가입하기
                </S.Signbutton>
            </form>
        </S.Main>
    );
}

export default Signup;
