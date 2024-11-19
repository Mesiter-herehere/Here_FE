import styled from "styled-components";

export const Back = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

export const UrgentBox = styled.div`
    width: 35vw;
    height: 332px;
    background-color: #15171E;
`

export const UrgentTitle = styled.span`
    color: white;
    font-size: 30px;
    font-family: Pretendard;
    font-weight: 500;
`

export const UrgentInput = styled.input`
    width: 80%;
    height: 56px;
    background-color: #242630;
    color: #E1E1E1;

    font-family: Pretendard;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

export const Button = styled.button`
    width: 86px;
    height: 41px;
    background: #1D1F29;
    border-radius: 8px;
`

export const modalopenbutton = styled.button`
    cursor: pointer;
    margin-left: auto;
  `

export const modalclosebutton = styled.button`
    cursor: pointer;
    position: absolute;
    width: 28px;
    height: 28px;
    left: 685px;
    top: 34px;
    color: white;
 `

export const modalcontainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`

export const modalcontent = styled.div`
    position: absolute;
    width: 756px;
    height: 497px;
    left: calc(50% - 756px/2 + 1px);
    top: 253px;

    background: #15171E;
    border-radius: 13px;

`