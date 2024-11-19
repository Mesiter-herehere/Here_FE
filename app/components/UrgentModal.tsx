import React from "react";
import axios from "axios";
import { useRef } from "react";
import * as S from "../styles/UrgentModal";

interface ModalProps {
    onClose: () => void;
}

function UrgentModal({onClose }: ModalProps){
    const modalBackground = useRef<HTMLDivElement>(null);
    
    
    return(
        <S.modalcontainer
            ref={modalBackground}
            onClick={e => {
                if (e.target === modalBackground.current) {
                    onClose();
                }
            }}
        >
            <S.modalcontent>
                
                <S.modalclosebutton onClick={onClose}>⨉</S.modalclosebutton>
            </S.modalcontent>
        </S.modalcontainer>
    );
}

export default UrgentModal;