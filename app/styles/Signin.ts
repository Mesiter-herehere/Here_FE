import styled from "styled-components";

export const Main = styled.div`
  height: 140vh;
`

export const Textbox = styled.div`
  width: 90vw;
  margin-left: -60px;
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
  margin-top: 121px;
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
  margin-left: 498px;
  color: white;

  @media (max-width: 1153px) {
    margin-left: 190px;
  }
`

export const Loginbutton = styled.button`
  display: block;
  width: 177px;
  height: 60px;
  margin-top: 42px;
  margin-left: auto;
  margin-right: auto;
  padding: 18px 54px 18px 53px;
  border-radius: 8px;
  background-color: #1d1f29;
  color: white;
`

export const PasswordWrapper = styled.div`
  position: relative;
  width: 712px; /* emailinput과 동일한 width */
  height: 56px;
  margin-top: 23px; /* emailinput과 동일한 margin */
  margin-left: 498px; /* emailinput과 동일한 margin-left */
  
  @media (max-width: 1153px) {
    margin-left: 190px; /* emailinput과 동일한 media query */
  }
`;

export const psinput = styled.input`
  width: 100%; /* 부모인 PasswordWrapper에 맞게 width 설정 */
  height: 56px;
  padding: 0 30px;
  border-radius: 8px;
  background-color: #242630;
  color: white;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 15px;
  margin-top: -40px;
  cursor: pointer;
  color: #ccc;
`;

export const backspan = styled.span`
  display: flex;
  color: white;
  font-family: Pretendard;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  margin-left: 60px;
  padding-top: 20px;
  cursor: pointer;
`