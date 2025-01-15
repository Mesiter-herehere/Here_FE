import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;
    color: white;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 50px;
`;

export const SubTitle = styled.p`
    font-size: 18px;
    color: #8F8F8F;
    margin-bottom: 40px;
    margin-top: -10px;
    font-weight: 550;
`;

export const ReportContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
`;

export const ReportCard = styled.div`
    background: #1A1B23;
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 20px;
    margin-top: 40px;
    height: 360px;
    overflow: hidden;
`;

export const ReportHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    gap: 20px;
`;

export const ReportContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #DCDCDC;
    margin-bottom: 10px;
`;

export const ReportTitle = styled.h2`
    font-size: 20px;
    font-weight: 550;
    color: #8F8F8F;
    position: absolute;
    top: 45px;
    left: 0;
    transform: translateY(-150%);
`;

export const ReportImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
    transform: translateY(20px);
    position: relative;
    z-index: 1;
`;

export const ReportReason = styled.p`
    font-size: 16px;
    color: #DCDCDC;
    line-height: 1.5;
`;

export const SubmitButton = styled.button`
    width: 20%;
    padding: 15px;
    background: #242630;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #2a2d38;
    }
`;

