import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main`
  padding-top: 110px;

  ${media.lessThan('medium')`
    padding-top: 80px;
  `}
`;

export const Container = styled.section`
  width: min(100%, 1200px);
  margin: 0 auto;
  padding: 24px 0;

  section {
    scroll-margin-top: 140px;

    ${media.lessThan('medium')`
      scroll-margin-top: 90px;
    `}
  }

  ${media.lessThan('medium')`
    width: 90%;
    padding: 16px 0;
  `}
`;

export const Intro = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 32px;

  ${media.lessThan('medium')`
    flex-direction: column;
    gap: 24px;
    text-align: center;
    align-items: center;
  `}
`;

export const Content = styled.div`
  flex: 1;
  max-width: 100%;

  ${media.lessThan('medium')`
    text-align: center;
  `}
`;

export const Greeting = styled.div`
  color: ${({ theme }) => theme.colors.line};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: 700;
  margin-bottom: 16px;

  ${media.lessThan('medium')`
    margin-bottom: 12px;
  `}
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.huge};
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;

  ${media.lessThan('medium')`
    margin-bottom: 16px;
    line-height: 1.3;
  `}

  ${media.lessThan('small')`
    font-size: 1.75rem;
  `}
    @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  line-height: 1.7;

  strong {
    color: ${({ theme }) => theme.colors.line};
  }

  ${media.lessThan('medium')`
    line-height: 1.6;
  `}

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`;
