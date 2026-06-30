import styled from 'styled-components';

import media from 'styled-media-query';

export const Container = styled.div`
  width: min(1200px, 100%);
  margin: 50px auto;

  display: flex;
  gap: 30px;

  ${media.lessThan('medium')`
      width:90%;
      flex-direction:column;
  `}
`;

export const PlanList = styled.div`
  width: 290px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  ${media.lessThan('medium')`
      width:100%;
  `}
`;

type CardProps = {
  $active: boolean;
};

export const PlanCard = styled.button<CardProps>`
  position: relative;

  border: none;

  cursor: pointer;

  border-radius: 12px;

  padding: 25px;

  text-align: left;

  transition: 0.3s;

  background: ${({ theme, $active }) =>
    $active ? theme.colors.line : theme.colors.card};

  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.text};

  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.line : theme.colors.border};

  h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  span {
    font-size: 28px;
    font-weight: bold;
  }

  &:hover {
    transform: translateX(6px);
  }
`;

export const Badge = styled.div`
  position: absolute;

  right: 15px;
  top: 15px;

  padding: 5px 10px;

  border-radius: 30px;

  font-size: 11px;

  font-weight: bold;

  background: #ff4040;

  color: white;
`;

export const PlanInfo = styled.div`
  flex: 1;

  padding: 40px;

  border-radius: 15px;

  background: ${({ theme }) => theme.colors.card};

  display: flex;

  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;

  justify-content: space-between;

  padding-bottom: 25px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  h2 {
    font-size: 34px;

    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    margin-top: 8px;

    font-size: 42px;

    color: ${({ theme }) => theme.colors.line};
  }
`;

export const Description = styled.p`
  margin: 35px 0;

  line-height: 1.8;

  color: ${({ theme }) => theme.colors.text};
`;

export const Features = styled.ul`
  list-style: none;

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 18px;

  margin-bottom: 40px;

  li {
    font-size: 17px;

    color: ${({ theme }) => theme.colors.text};
  }

  ${media.lessThan('medium')`

grid-template-columns:1fr;

`}
`;

export const Footer = styled.div`
  margin-top: auto;

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

  ${media.lessThan('medium')`

flex-direction:column;

align-items:flex-start;

`}
`;

export const Button = styled.button`
  width: 260px;

  height: 58px;

  border: none;

  cursor: pointer;

  border-radius: 8px;

  font-size: 18px;

  font-weight: bold;

  transition: 0.3s;

  background: ${({ theme }) => theme.colors.line};

  color: ${({ theme }) => theme.colors.black};

  &:hover {
    opacity: 0.9;

    transform: translateY(-2px);
  }

  ${media.lessThan('medium')`

width:100%;

`}
`;
