import React, { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import * as S from "../styles/UrgentModal";

interface ModalProps {
    onClose: () => void;
}

function UrgentModal({ onClose }: ModalProps) {
    const modalBackground = useRef<HTMLDivElement>(null);
    const [reportReason, setReportReason] = useState("");
    
    const handleSubmit = async () => {
        try {
            // 신고 API 호출 로직 구현
            // await axios.post(...);
            onClose();
        } catch (error) {
            console.error("신고 제출 실패:", error);
        }
    };
    
    return (
        <S.modalcontainer
            ref={modalBackground}
            onClick={e => {
                if (e.target === modalBackground.current) {
                    onClose();
                }
            }}
        >
            <S.modalcontent>
                <S.Title>신고하신 이유를 작성해 주세요.</S.Title>
                <S.CloseButton onClick={onClose}>×</S.CloseButton>
                <S.TextArea
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    placeholder="신고 사유를 입력해주세요"
                />
                <S.ButtonContainer>
                    <S.ConfirmButton onClick={handleSubmit}>확인</S.ConfirmButton>
                    <S.CancelButton onClick={onClose}>취소</S.CancelButton>
                </S.ButtonContainer>
            </S.modalcontent>
        </S.modalcontainer>
    );
}

export default UrgentModal;