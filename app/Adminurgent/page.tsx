'use client'

import React from "react";
import * as S from "../styles/Adminurgent";
import Nav from "../components/Nav";

function Adminurgent() {
    return (
        <>
            <Nav />
            <S.Container>
                <S.Title>신고 접수</S.Title>
                <S.SubTitle>신고된 사용자와 사유에요.</S.SubTitle>
                
                <S.ReportContainer>
                    <S.ReportCard>
                        <S.ReportHeader>
                            <S.ReportContent>
                                <S.ReportTitle>신고 받은 유저: 신희성</S.ReportTitle>
                                <S.ContentTitle>테스트 1234</S.ContentTitle>
                                <S.ReportReason>
                                    토기가 저렇게 보느거 같을 아아아아아아아아아야!!!!!!!
                                </S.ReportReason>
                            </S.ReportContent>
                            <S.ReportImage src="/test.svg" alt="신고된 이미지" />
                        </S.ReportHeader>
                        <S.SubmitButton>유저 비활성화</S.SubmitButton>
                    </S.ReportCard>
                </S.ReportContainer>
            </S.Container>
        </>
    );
}

export default Adminurgent;