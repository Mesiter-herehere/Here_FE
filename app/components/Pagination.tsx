import React, { useState } from "react";
import * as S from "../styles/Pagination";


interface PaginationProps {
    currentPage: number;
    totalPage: number;
    onPageChange: (page: number) => void;
}

function Pagination({currentPage, totalPage, onPageChange}: PaginationProps){

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return(
        <S.Pagination>
            <S.Buttons>
                {currentPage > 1 && (
                    <S.PagePreButton onClick={handlePrevPage}>
                        <S.ContinuePage>이전</S.ContinuePage>
                    </S.PagePreButton>
                )}
                
                <S.PageNextButton onClick={handleNextPage}>
                    <S.ContinuePage>다음으로</S.ContinuePage>
                </S.PageNextButton>
            </S.Buttons>

            <S.PageNumber>{`${currentPage}/${totalPage}`}</S.PageNumber>
        </S.Pagination>
    );
}

export default Pagination;
