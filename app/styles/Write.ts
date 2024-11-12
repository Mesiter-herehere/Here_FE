import { symlink } from "fs";
import styled from "styled-components";

export const Title = styled.span`
    width: 402px;
    height: 43px;
    font-family: Pretendard;
    font-size: 42px;
    font-weight: bold;
    text-align: left;
    margin-left: 430px;
    color: #fff;

    @media (max-width: 1153px) {
        margin-left: 100px;
    }
`

export const gap = styled.div`
    height: 92px;
`

export const description = styled.span`
    width: 194px;
    height: 21px;
    margin-left: 440px;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 500;
    text-align: left;
    color: #8f8f8f;

    @media (max-width: 1153px) {
        margin-left: 115px;
    }
`

export const schoolct = styled.div`
    width: 305px;
    height: 44px;
    margin: 38px 11px -33px 440px;
    padding: 11px 35px 12px 36px;
    border-radius: 20px;
    background-color: #343539;
    display: flex;
    align-items: center;

    @media (max-width: 1153px) {
        margin-left: 105px;
    }
`

export const shoolctspan = styled.span`
    width: 234px;
    height: 21px;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #d7d7d7;
`

export const namect = styled.div`
    height: 44px;
    margin-left: 760px;
    margin-top: -190px;
    padding: 11px 25px 14px 24px;
    border-radius: 20px;
    background-color: #343539;
    display: inline-block;
    align-items: center;

    @media (max-width: 1153px) {
        margin-left: 425px;
    }
`

export const namectspan = styled.span`
    width: 47px;
    height: 21px;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #d7d7d7;
`

export const textboxdiv = styled.div`
    display: flex;
    justify-content: center;
`

export const textbox = styled.div`
    width: 838px;
    height: 429px;
    margin: 40px 14px 31px 25px;
    padding: 42px 40px 294px 40px;
    border-radius: 8px;
    background-color: #1d1f29;
`

export const Titleinput = styled.input`
    width: 100%;
    height: 3vh;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 500;
    background-color: #1d1f29;
    text-align: left;
    color: #dcdcdc;

    &:focus {
        outline:none;
    }

    &::placeholder{
        width: 42px;
        height: 29px;
        margin: 0 586px 17px 4px;
        font-family: Pretendard;
        font-size: 24px;
        font-weight: 500;
        text-align: left;
        color: #dcdcdc;
    }
`

export const textTitle = styled.span`
    width: 42px;
    height: 29px;
    margin: 0 586px 17px 4px;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #dcdcdc;
`

export const titleLine = styled.div`
    width: 770px;
    height: 1px;
    transform: rotate(-360deg);
    background-color: #343539;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    margin-bottom: 20px;
`

export const containTextArea = styled.textarea`
    width: 100%;
    height: 310%;
    background-color: #1d1f29;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    color: #dcdcdc;
    border: none;
    resize: none;

    &:focus{
        outline: none;
    }

    &::placeholder{
        width: 150px;
        height: 21px;
        margin-left: 5px;
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #dcdcdc;
    }
`

export const imgboxdiv = styled.div`
    display: flex;
    justify-content: center;
`
export const imgbox = styled.div`
    width: 838px;
    height: 374px;  
    margin: 31px 16px 86px 23px;
    padding: 146px 233px 146px 234px;
    border-radius: 5px;
    border: dashed 1px #fff;
    background-color: #1d1f29;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const imgplus = styled.img`
    width: 40px;
    height: 40px;
    margin-bottom: 16px;
`

export const imgInput = styled.input`
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
`

export const imgspan = styled.span`
    width: 245px;
    height: 18px;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #6c757d;
`

export const buttondiv = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
`

export const submitButton = styled.button`
    width: 177px;
    height: 60px;
    padding: 18px 53px 18px 54px;
    border-radius: 8px;
    background-color: #242630;
    color: white;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
`

export const uploadedImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: contain;
    align-items: center;
`;