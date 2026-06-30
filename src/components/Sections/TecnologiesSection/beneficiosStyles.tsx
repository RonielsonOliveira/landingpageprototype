import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: min(1200px, 90%);
  margin: 60px auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;

  ${media.lessThan('medium')`
      width:95%;
      grid-template-columns:1fr;
  `}
`;

export const Card = styled.div`
  padding: 35px 30px;

  background: ${({ theme }) => theme.colors.card};

  border-radius: 15px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  transition: 0.35s;

  text-align: center;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.line};
  }

  h3 {
    margin: 25px 0 15px;

    color: ${({ theme }) => theme.colors.text};

    font-size: 24px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};

    line-height: 1.7;
  }
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.line};

  color: ${({ theme }) => theme.colors.white};

  svg {
    font-size: 42px;
  }
`;
