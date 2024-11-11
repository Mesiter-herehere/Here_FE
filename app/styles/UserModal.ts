import styled from "styled-components";

export const btnwrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
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

export const line = styled.div`

position: absolute;
width: 632px;
height: 0px;
left: calc(50% - 632px/2 + 0px);
top: 144px;

border: 1px solid #343539;
transform: rotate(0deg);

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

export const playerdiv = styled.div`
width: 648px;
height: 150px;
margin-left: 520px;
margin-top: 40px;
`

export const playerTitle = styled.span`

position: absolute;
width: 496px;
height: 29px;
left: 62px;
top: calc(50% - 29px/2 - 129px);

font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;

color: #DCDCDC;

`

export const playerDes = styled.span`
 
position: absolute;
width: 471px;
height: 189px;
left: 62px;
top: calc(50% - 189px/2 + 17px);

font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;

color: #DCDCDC;


`

export const schoolct = styled.div`

position: absolute;
width: 305px;
height: 44px;
left: 33px;
top: 27px;

background: #343539;
border-radius: 20px;


@media (max-width: 1153px) {
    margin-left: 105px;
}
`

export const shoolctspan = styled.span`
position: absolute;
width: 234px;
height: 21px;
left: calc(50% - 234px/2 + 0.5px);
top: calc(50% - 21px/2 - 0.5px);

font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;

color: #D7D7D7;


`

export const namect = styled.div`
  position: absolute;
  display: flex; /* 변경: inline-block에서 flex로 */
  align-items: center; /* 세로 정렬을 위해 추가 */
  padding: 0 20px; /* 여백 추가 (필요에 따라 조정) */
  height: 44px;
  left: 349px;
  top: 27px;
  
  background: #343539;
  border-radius: 20px;

  @media (max-width: 1153px) {
      margin-left: 425px;
  }
`;

export const namectspan = styled.span`
  display: inline-block;
  padding: 0;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #D7D7D7;
`;


export const playerImg = styled.img`

position: absolute;
width: 120px;
height: 150.22px;
left: 571px;
top: 171px;

background: url(image.png);
border-radius: 8px;

`