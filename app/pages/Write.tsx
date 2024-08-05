'use client'

import React, { use, useState } from "react";
import * as S from "../styles/Write";
import { useRouter } from "next/navigation";
import axios from "axios";
import Nav from "../components/Nav";

function Write(){
    const router = useRouter();
    const [titleValue, setTitleValue] = useState("");
    const [containValue, setContainValue] = useState("");

    function handleTitleChange(e: string){
        setTitleValue(titleValue);
    }
    function handleContainChange(e : string){
        setContainValue(containValue)
    }

    const handlesubmit = async (e: any) => {
        const dto = {
            Title : titleValue,
            Contain : containValue
        }

        try {
            const response = await axios.post("/api/write", dto);
            

        } catch (error) {
            console.log("내용 작성 실패", error);
        }
    };

    return(
        <>
            <Nav />
            <S.gap />
            <S.Title> 🤩 마음껏 뽐내보세요</S.Title>
            <br />
            <S.description>마음껏 ‘나’를 소개해주세요!</S.description>

            <S.schoolct>
                <S.shoolctspan>광주소프트웨어마이스터고등학교</S.shoolctspan>
            </S.schoolct>
            <S.namect>
                <S.namectspan>진건희</S.namectspan>
            </S.namect>

            <S.textboxdiv>
                <S.textbox>
                    <S.Titleinput placeholder="제목" value={titleValue} onChange={handleTitleChange} />
                    <S.titleLine />
                    <S.containTextArea placeholder="내용을 입력해주세요" />
                </S.textbox>
            </S.textboxdiv>
            
            <S.imgboxdiv>
                <S.imgbox>
                    <S.imgplus  src={"/imgplus.svg"} value={containValue} onChange={handleContainChange} />
                    <S.imgspan>이미지를 드래그 앤 드롭 또는 직접 업로드 해주세요</S.imgspan>
                </S.imgbox>
            </S.imgboxdiv>
        </>
    );
}


export default Write;