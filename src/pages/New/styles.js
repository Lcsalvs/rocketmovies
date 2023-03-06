import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  main {
    grid-area: content;
    overflow-y: auto;
  }

  .inputs {
    display: flex;
    gap: 40px;
    justify-content: space-between;

    margin-bottom: 40px;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 40px;
  }

  .buttons {
    margin-top: 40px;
    display: flex;
    gap: 40px;

    :nth-first-child{
      background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
    }
  }
`

export const Form = styled.form`

max-width: 1137px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
    
    a {
      font-size: 16px;
      color: ${({ theme}) => theme.COLORS.PINK};
    }
  }
`