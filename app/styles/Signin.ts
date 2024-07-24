import styled from "styled-components";

export const Main = styled.div`
  height: 140vh;
`

export const Textbox = styled.div`
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;

  @media (max-width: 1153px) {
    width: 90vw;
    margin-left: -370px;
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

export const emailinput = styled.input`
  width: 712px;
  height: 56px;
  margin-top: 23px;
  padding: 0 30px;
  border-radius: 8px;
  background-color: #242630;
  margin-left: 560px;
  color: white;

  @media (max-width: 1153px) {
    margin-left: 190px;
  }
`

export const psinput = styled.input`
  width: 712px;
  height: 56px;
  margin-top: 23px;
  padding: 0 30px;
  border-radius: 8px;
  background-color: #242630;
  margin-left: 560px;
  color: white;

  @media (max-width: 1153px) {
    margin-left: 190px;
  }
`

export const Signbutton = styled.button`
  width: 177px;
  height: 60px;
  margin-top: 35px;
  margin-left: 1158px;
  padding: 18px 54px 18px 53px;
  border-radius: 8px;
  background-color: #1d1f29;
  color: white;

  @media (max-width: 1153px) {
    margin-left: 787px;
  }
`