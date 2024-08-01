import axios from "axios";
import { useRouter } from "next/navigation";
import * as S from "../styles/Nav";


function Nav(){
    const router = useRouter();

    function pathsignin(){
        router.push("/Signin");
    };

    function pathsignup(){
        router.push("/Signup");
    };

    function logomain(){
        router.push("/Main");
    }

    return(
        <>
            <S.logo src={"/logo.svg"} onClick={logomain} />
            <S.pathbox>
                <S.gosignup onClick={pathsignup}>회원가입</S.gosignup>
                <S.gologin onClick={pathsignin}>로그인</S.gologin>
                <S.goline />
            </S.pathbox>
        </>
    );
}

export default Nav;