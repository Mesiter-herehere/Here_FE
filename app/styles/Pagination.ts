import styled from "styled-components";

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
`

export const PageNextButton = styled.div`
    width: 136px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1D1F29;
    color: #D7D7D7;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
`

export const PagePreButton = styled.div`
    width: 106px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1D1F29;
    color: #D7D7D7;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
`

export const ContinuePage = styled.span`
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 400;
    cursor: pointer;
`

export const PageNumber = styled.span`
    font-size: 14px;
    font-family: Pretendard;
    font-weight: 500;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: white;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 30px;
`