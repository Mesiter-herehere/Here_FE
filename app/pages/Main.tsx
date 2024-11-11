'use client'

import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; 
import * as S from "../styles/Main";
import Nav from "../components/Nav";
import Userdata from "../components/Userdata";
import Modal from "../components/UserModal";
import Pagination from "../components/Pagination";

interface UserData {
    title: string;
    content: string;
    userSchool: string;
    userName: string;
    imageUrl?: string;
}

function Main() {
    const [schoolValue, setSchoolValue] = useState("");
    const [userData, setUserData] = useState<UserData[]>([]);
    const [logined, setLogined] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [CurrentPage, SetCurrentPage] = useState(1);
    const [TotalPage, SetTotalPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
    const schoolListRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            setLogined(true);
            fetchUserData(token, schoolValue, CurrentPage);
        } else {
            setLogined(false);
        }
    }, [schoolValue, CurrentPage]);

    const fetchUserData = async (token: string, school?: string, page?: number) => {
        try {
            const adjustedPage = (page ?? 1) - 1;
            const url = school 
                ? `https://endlessly-cuddly-salmon.ngrok-free.app/api/self-intro/main/school?school=${school}&page=${adjustedPage}`
                : `https://endlessly-cuddly-salmon.ngrok-free.app/api/self-intro/main/school?page=${adjustedPage}`;
            
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'ngrok-skip-browser-warning': '69420',
                }
            });
            if (response.status === 200) {
                const data = response.data;
                const TotalPageCount = response.data.TotalPage;

                if (Array.isArray(data)) {
                    setUserData(data);
                    SetTotalPage(TotalPageCount);
                } else {
                    setUserData([data]);
                }   

                console.log("데이터 get 성공");
                console.log(data);
            }
        } catch (error) {
            console.error("유저 데이터 요청 실패:", error);
        }
    };

    const handleUserClick = (user: UserData) => {
        setSelectedUser(user);
        setModalOpen(true);
    };

    const handlePageChange = (newPage: number) => {
        SetCurrentPage(newPage);
    };

    const truncateText = (text: string | undefined) => {
        if (!text) return "";
        return text.length > 10 ? text.slice(0, 10) + "..." : text;
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (schoolListRef.current && !schoolListRef.current.contains(event.target as Node)) {
            setSchoolValue("");
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <Nav />

            {logined ? (
                <>
                    <S.Title>‘저’를 소개합니다!</S.Title>
                    <br />
                    <S.LightTitle>저를 미리 알고 가면 좋을껄요?</S.LightTitle>

                    <S.schooldiv ref={schoolListRef}>
                        <S.schoollist
                            isSelected={schoolValue === "BUSAN_SOFTWARE_MAESTER"} 
                            onClick={() => setSchoolValue("BUSAN_SOFTWARE_MAESTER")}>부산</S.schoollist>
                        <S.schoollist
                            isSelected={schoolValue === "GWANGJU_SOFTWARE_MAESTER"} 
                            onClick={() => setSchoolValue("GWANGJU_SOFTWARE_MAESTER")}>광주</S.schoollist>
                        <S.schoollist
                            isSelected={schoolValue === "DAEJEON_SOFTWARE_MAESTER"} 
                            onClick={() => setSchoolValue("DAEJEON_SOFTWARE_MAESTER")}>대덕</S.schoollist>
                        <S.schoollist
                            isSelected={schoolValue === "DAE_SOFTWARE_MAESTER"} 
                            onClick={() => setSchoolValue("DAE_SOFTWARE_MAESTER")}>대구</S.schoollist>
                    </S.schooldiv>
                    
                    <S.UserGap />
                    {userData.length > 0 && (
                        <Userdata
                            userDatas={userData}
                            onUserClick={handleUserClick}
                        />
                    )}
                    
                    <S.UserGap />
                    <Pagination
                        currentPage={CurrentPage}
                        totalPage={TotalPage}
                        onPageChange={handlePageChange} />

                    {modalOpen && selectedUser && (
                        <Modal user={selectedUser} onClose={() => setModalOpen(false)} />
                    )}
                </>
            ) : (
                <>
                    <S.Title>‘저’를 소개합니다!</S.Title>
                    <br />
                    <S.LightTitle>저를 미리 알고 가면 좋을껄요?</S.LightTitle>
                    <br />
                    <S.assent href="Signin">로그인 후 서비스를 이용해주세요.</S.assent>
                </>
            )}
        </>
    );
}

export default Main;
