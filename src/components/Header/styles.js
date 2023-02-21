import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  display: flex;
  justify-content: space-between;
  padding: 42px 123px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  > h1 { 
    color: ${({ theme}) => theme.COLORS.PINK};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 18px;

    span {
      font-size: 14px;
      color: ${({ theme}) => theme.COLORS.GRAY_100};
    }

    strong {
      span {
      font-size: 14px;
      color: ${({ theme}) => theme.COLORS.WHITE};
    }
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`