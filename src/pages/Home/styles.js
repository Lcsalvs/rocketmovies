import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
  }
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewMovies = styled.div`
  grid-area: newmovie;
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