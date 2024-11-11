import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as S from "../styles/UserModal";

interface ModalProps {
    user: {
        title: string;
        content: string;
        userSchool: string;
        userName: string;
        imageUrl?: string;
    } | null;
    onClose: () => void;
}

function Modal({ user, onClose }: ModalProps) {
    const modalBackground = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            setLoading(false);
        }
    }, [user]);

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
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    user && (
                        <>
                            <S.playerTitle>{user.title}</S.playerTitle>
                            <S.playerDes>{user.content}</S.playerDes>

                            <S.line></S.line>
                            
                            <S.schoolct>
                                <S.shoolctspan>
                                    {user.userSchool}
                                </S.shoolctspan>
                            </S.schoolct>
                            <S.namect>
                                <S.namectspan>
                                    {user.userName}
                                </S.namectspan>
                            </S.namect>
                            {user.imageUrl && <S.playerImg src={user.imageUrl} alt={`${user.userName}'s profile`} />}
                        </>
                    )
                )}
                <S.modalclosebutton onClick={onClose}>⨉</S.modalclosebutton>
            </S.modalcontent>
        </S.modalcontainer>
    );
}

export default Modal;