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

export const assent = styled.span`
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

export const schoollist = styled.div<{ isSelected: boolean }>`
    width: 147px;
    height: 54px;
    flex-grow: 0;
    margin: 0 20px 0 0;
    padding: 14px 54px;
    border: ${(props) => (props.isSelected ? 'solid 2px #FFFFFF' : 'none')};
    border-radius: 8px;
    background-color: #1d1f29;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const playerdiv = styled.div`
    width: 648px;
    height: 150px;
    margin-left: 520px;
    margin-top: 40px;
`

export const playerTitle = styled.span`
    width: 248px;
    height: 29px;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    color: #fff;
`

export const playerDes = styled.span`
     width: 484px;
    height: 21px;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    color: #adadad;
`

export const schoolct = styled.div`
    width: 305px;
    height: 44px;
    margin-top: 43px;
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
    width: 96px;
    height: 44px;
    margin-left: 320px;
    margin-top: -44px;
    padding: 12px 25px 11px 24px;
    border-radius: 20px;
    background-color: #343539;
    display: flex;
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

export const playerImg = styled.img`
    width: 120px;
    height: 150.2px;
    margin-top: -150px;
    margin-left: 530px;
    border-radius: 8px;
`