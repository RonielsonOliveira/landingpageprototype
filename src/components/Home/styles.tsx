import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main`
  padding-top: 110px;
  min-height: calc(100vh - 110px);
  background: ${({ theme }) => theme.colors.mainBg};

  ${media.lessThan('medium')`
    padding-top: 80px;
    min-height: calc(100vh - 80px);
  `}
`;

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.mainBg};
  padding: 0;
  width: 100%;

  h2 {
    width: min(60%, 900px);
    margin: 40px auto;
    color: ${({ theme }) => theme.colors.text};

    ${media.lessThan('medium')`
      width: 100%;
      margin: 24px auto;
      padding: 0 1rem;
      text-align: center;
    `}
  }

  p {
    width: min(100%, 900px);
    display: block;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.text};

    ${media.lessThan('medium')`
      width: 100%;
      padding: 0 1rem;
    `}
  }

  a {
    width: min(100%, 900px);
    display: block;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;

    ${media.lessThan('medium')`
      width: 100%;
      padding: 0 1rem;
    `}
  }

  section {
    scroll-margin-top: 140px;

    ${media.lessThan('medium')`
      scroll-margin-top: 90px;
    `}
  }
`;
