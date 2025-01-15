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
                <h2>신고하기</h2>
                <textarea
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    placeholder="신고 사유를 입력해주세요"
                />
                <button onClick={handleSubmit}>신고하기</button>
                <S.modalclosebutton onClick={onClose}>⨉</S.modalclosebutton>
            </S.modalcontent>
        </S.modalcontainer>
    );
}

export default UrgentModal;