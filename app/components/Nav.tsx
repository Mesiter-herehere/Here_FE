import axios from "axios";
import { useRouter } from "next/navigation";
import * as S from "../styles/Nav";
import { useState, useEffect } from "react";

function Nav() {
    const router = useRouter();
    const [logined, setLogined] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            axios.post('http://localhost:8000/api/verify-token', { token })
                .then(response => {
                    if (response.data.status === "success") {
                        setLogined(true);
                    } else {
                        setLogined(false);
                    }
                })
                .catch(error => {
                    setLogined(false);
                });
        } else {
            setLogined(false);
        }
    }, []);

    function pathsignin() {
        router.push("/Signin");
    };

    function pathsignup() {
        router.push("/Signup");
    };

    function logomain() {
        router.push("/");
    }

    function pathwrite() {
        router.push("/Write");
    }

    function handleLogout() {
        localStorage.removeItem('access_token');
        setLogined(false);
        router.push("/");
    }

    return (
        <>
            <S.logo src={"/logo.svg"} onClick={logomain} />
            {logined ? (
                <S.loginedbox>
                    <S.introduce onClick={pathwrite}>나 소개하기</S.introduce>
                    <S.gologout onClick={handleLogout}>로그아웃</S.gologout>
                </S.loginedbox>
            ) : (
                <S.pathbox>
                    <S.gologin onClick={pathsignin}>로그인</S.gologin>
                    <S.gosignup onClick={pathsignup}>회원가입</S.gosignup>
                </S.pathbox>
            )}
        </>
    );
}

export default Nav;
