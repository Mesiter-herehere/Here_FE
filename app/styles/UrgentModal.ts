import styled from "styled-components";

export const modalcontainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const modalcontent = styled.div`
    position: relative;
    width: 500px;
    background: #1A1B23;
    border-radius: 12px;
    padding: 30px;
`;

export const Title = styled.h2`
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 700;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    background: #242630;
    border: none;
    border-radius: 8px;
    padding: 15px;
    color: white;
    font-size: 16px;
    font-weight: 400;
    resize: none;
    margin-bottom: 20px;

    &::placeholder {
        color: #666;
        font-weight: 400;
    }

    &:focus {
        outline: none;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const Button = styled.button`
    padding: 10px 30px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    border: none;
`;

export const ConfirmButton = styled(Button)`
    background: #242630;
    color: white;
`;

export const CancelButton = styled(Button)`
    background: #242630;
    color: white;
`;