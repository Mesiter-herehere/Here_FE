'use client'

import React, { useState, useRef, useEffect } from "react";
import * as S from "../styles/Write";
import { useRouter } from "next/navigation";
import axios from "axios";
import Nav from "../components/Nav";

function Write() {
    const router = useRouter();
    const [titleValue, setTitleValue] = useState<string>("");
    const [containValue, setContainValue] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [schoolName, setSchoolName] = useState<string>("");
    const [studentName, setStudentName] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("access_token");
                const response = await axios.get(`${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/api/self-intro/user-info`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'ngrok-skip-browser-warning': '69420',
                    }
                });
                console.log(response.data);
                const { userSchool, userName } = response.data;

                setSchoolName(userSchool || "");
                setStudentName(userName || "");

                const introResponse = await axios.get(
                    `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/api/self-intro/inquiry`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'ngrok-skip-browser-warning': '69420',
                        },
                    }
                );

                const { title, content, imageUrl } = introResponse.data;
                setTitleValue(title || "");
                setContainValue(content || "");
                setImageSrc(imageUrl || "");
                
            } catch (error) {
                console.log("자기소개서 관련 정보를 받지 못했습니다.", error);
            }
        };

        fetchData();
    }, []);

    const handleImageUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(e.target.value);
    };

    const handleContainChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContainValue(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", titleValue);
        formData.append("content", containValue);
        if (imageFile) {
            formData.append("file", imageFile);
        }

        try {
            const token = localStorage.getItem("access_token");

            await axios.put(
                `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/api/self-intro`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            router.push("/");       
        } catch (error) {
            console.log("내용 작성 및 수정 과정에 오류가 생겼습니다.", error);
        }
    };

    return (
        <>
            <S.gap />
            <S.Title> 🤩 마음껏 뽐내보세요</S.Title>
            <br />
            <S.description>마음껏 ‘나’를 소개해주세요!</S.description>

            <S.schoolct>
                <S.shoolctspan>{schoolName || ""}</S.shoolctspan>
            </S.schoolct>
            <S.namect>
                <S.namectspan>{studentName || ""}</S.namectspan>
            </S.namect>

            <S.textboxdiv>
                <S.textbox>
                    <S.Titleinput 
                        placeholder="제목" 
                        value={titleValue} 
                        onChange={handleTitleChange} 
                        maxLength={30}
                    />
                    <S.titleLine />
                    <S.containTextArea 
                        placeholder="내용을 입력해주세요" 
                        value={containValue} 
                        onChange={handleContainChange}
                    />
                </S.textbox>
            </S.textboxdiv>

            <S.imgboxdiv>
                <S.imgbox 
                    onClick={handleImageUploadClick} 
                    onDrop={handleDrop} 
                    onDragOver={handleDragOver}
                >
                    {imageSrc ? (
                        <S.uploadedImage src={imageSrc} alt="Uploaded Image" />
                    ) : (
                        <>
                            <S.imgplus src={"/imgplus.svg"} />
                            <S.imgspan>이미지를 드래그 앤 드롭 또는 직접 업로드 해주세요</S.imgspan>
                        </>
                    )}
                    <S.imgInput 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageChange} 
                    />
                </S.imgbox>
            </S.imgboxdiv>

            <S.buttondiv>
                <S.submitButton onClick={handleSubmit}>등록하기</S.submitButton>
            </S.buttondiv>
        </>
    );
}

export default Write;
