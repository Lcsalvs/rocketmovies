import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900};

  > h1 {
    color: ${({ theme}) => theme.COLORS.PINK};
  }
`