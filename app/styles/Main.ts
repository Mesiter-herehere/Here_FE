import styled from "styled-components";

export const Title = styled.span`
    width: 257px;
    height: 43px;
    margin-left: 447.6px;
    font-family: Pretendard;
    font-size: 43px;
    font-weight: bold;
    text-align: left;
    color: #fff;

    @media (max-width: 1153px) {
        margin-left: 190px;
    }
`

export const LightTitle = styled.span`
    width: 214px;
    height: 21px;
    margin-left: 470px;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: normal;
    text-align: left;
    color: #8f8f8f;

    @media (max-width: 1153px) {
        margin-left: 210px;
    }
`

export const assent = styled.a`
    display: flex;
    width: auto;
    height: auto;
    margin-top: 216px;
    justify-content: center;
    font-family: Pretendard;
    font-size: 36px;
    font-weight: bold;
    text-align: left;
    color: #fff;
`

export const schooldiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;    
`

export const UserGap = styled.div`
    height: 62px;
`

export const schoollist = styled.div<{ isSelected: boolean }>`
    width: 147px;
    height: 54px;
    flex-grow: 0;
    margin: 0 20px 0 0;
    padding: 14px 54px;
    border: ${({ isSelected }) => (isSelected ? 'solid 2px #FFFFFF' : 'none')};
    border-radius: 8px;
    background-color: #1d1f29;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`