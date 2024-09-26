import styled from "styled-components";

export const Main = styled.div`
  height: 150vh;
`

export const Textbox = styled.div`
  width: 90vw;
  margin-left: -92px;
  display: inline-block;

  @media (max-width: 1153px) {
    width: 10vw;
    margin-left: -429px;
  }
`

export const Title = styled.span`
  display: block;
  width: 125px;
  height: 43px;
  margin-left: 560px;
  margin-top: 141px;
  font-family: Pretendard;
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`

export const description = styled.span`
display: block;
  width: 445px;
  height: 27px;
  margin-left: 560px;
  margin-top: 8px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #ccc;
`

export const school = styled.div`
  width: 776px;
  height: 371px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 31px;
  padding: 33px 32px 33px 21px;
  border-radius: 13px;
  background-color: #1d1f29;
`

export const des = styled.span`
  width: 309px;
  height: 29px;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`

export const schooloption = styled.div<{ isSelected: boolean }>`
  width: 712px;
  height: 56px;
  margin: 16px 0 12px 11px;
  padding: 17px 440px 18px 38px;
  border-radius: 8px;
  border: ${(props) => (props.isSelected ? 'solid 2px #FFFFFF'  : 'none')};
  background-color: #242630;
  cursor: pointer;
`

export const schoolname = styled.span`
  display: block;
  width: 274px;
  height: 21px;
  font-family: Pretendard ;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #e1e1e1;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`

export const name = styled.div`
  width: 776px;
  height: 179px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 31px;
  padding: 33px 33px 44px 21px;
  border-radius: 13px;
  background-color: #1d1f29;
  color: #fff;
`

export const styledinput = styled.input`
  width: 712px;
  height: 56px;
  margin: 17px 0 0 10px;
  padding: 0 30px;
  border-radius: 8px;
  background-color: #242630;
`

export const Signbutton = styled.button`
  width: 177px;
  height: 60px;
  margin-top: 35px;
  margin-left: 1064px;
  padding: 18px 54px 18px 53px;
  border-radius: 8px;
  background-color: #1d1f29;
  color: white;
  font-family: Pretendard;

  @media (max-width: 1153px) {
    margin-left: 729px;
  }
`