'use client'

import React, { useState } from "react";
import * as S from "../styles/Signup";
import { useRouter } from "next/navigation";
import axios from "axios";

function Signup() {
    const router = useRouter();
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [schoolValue, setSchoolValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dto = {
            school: schoolValue,
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        };

        try {
            const response = await axios.post("http://localhost:8000/api/signup", dto);
            if (response.status === 200) {
                router.push("/signin");
                alert("회원가입 성공");
            }
        } catch (error) {
            console.log("회원가입 실패:", error);
            alert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <S.Main>
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
                        isSelected={schoolValue === "광주소프트웨어마이스터고등학교"}
                        onClick={() => setSchoolValue("광주소프트웨어마이스터고등학교")}
                    >
                        <S.schoolname>광주소프트웨어마이스터고등학교</S.schoolname>
                    </S.schooloption>

                    <S.schooloption
                        isSelected={schoolValue === "부산소프트웨어마이스터고등학교"}
                        onClick={() => setSchoolValue("부산소프트웨어마이스터고등학교")}
                    >
                        <S.schoolname>부산소프트웨어마이스터고등학교</S.schoolname>
                    </S.schooloption>

                    <S.schooloption
                        isSelected={schoolValue === "대구소프트웨어마이스터고등학교"}
                        onClick={() => setSchoolValue("대구소프트웨어마이스터고등학교")}
                    >
                        <S.schoolname>대구소프트웨어마이스터고등학교</S.schoolname>
                    </S.schooloption>

                    <S.schooloption
                        isSelected={schoolValue === "대덕소프트웨어마이스터고등학교"}
                        onClick={() => setSchoolValue("대덕소프트웨어마이스터고등학교")}
                    >
                        <S.schoolname>대덕소프트웨어마이스터고등학교</S.schoolname>
                    </S.schooloption>
                </S.school>

                <S.name>
                    <S.des>2. 이름을 알려주세요.</S.des>
                    <S.styledinput value={nameValue} onChange={handleNameChange} type="text" placeholder="ex) 진건희" />
                </S.name>

                <S.name>
                    <S.des>3. 학교 메일을 입력하세요.</S.des>
                    <S.styledinput value={emailValue} onChange={handleEmailChange} type="email" placeholder="ex) s23054@gsm.hs.kr" />
                </S.name>

                <S.name>
                    <S.des>4. 사용할 비밀번호를 입력하세요.</S.des>
                    <S.styledinput value={passwordValue} onChange={handlePasswordChange} type="password" placeholder="ex) swmeister" />
                </S.name>

                <S.Signbutton type="submit">
                    가입하기
                </S.Signbutton>
            </form>
        </S.Main>
    );
}

export default Signup;
