import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  

  > main {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    overflow-y: auto;
  }
`

export const Content = styled.div`
  padding: 0 64px;
  overflow-y: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewMovies = styled.div`
  background-color: ${({ theme}) => theme.COLORS.PINK};
  color: ${({ theme}) => theme.COLORS.BACKGROUND_900};

  width: 207px;
  height: 48px;
  border-radius: 8px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`