import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: min(1200px, 95%);
  margin: 60px auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  ${media.lessThan('large')`
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  `}

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    width: 95%;
  `}
`;

type CardProps = {
  $featured?: boolean;
};

export const PlanCard = styled.div<CardProps>`
  position: relative;

  display: flex;
  flex-direction: column;

  height: 850px;
  padding: 35px;

  border-radius: 18px;

  background: ${({ theme }) => theme.colors.card};

  border: 2px solid
    ${({ $featured, theme }) =>
      $featured ? theme.colors.line : theme.colors.border};

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  &:hover {
    border-color: ${({ theme }) => theme.colors.line};
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  ${media.lessThan('large')`
    height: 620px;
  `}

  ${media.lessThan('medium')`
    height: auto;
    min-height: 600px;
  `}
`;
export const Badge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;

  transform: translateX(-50%);

  background: ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.white};

  padding: 8px 18px;
  border-radius: 999px;

  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;

  z-index: 2;
  white-space: nowrap;

  ${media.lessThan('medium')`
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 11px;
    padding: 6px 14px;
  `}
`;
export const Header = styled.div`
  text-align: center;

  padding-bottom: 25px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  h2 {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 15px;
  }

  h1 {
    font-size: 44px;
    color: ${({ theme }) => theme.colors.line};
  }
`;

export const Description = styled.p`
  margin: 30px 0;

  line-height: 1.8;

  text-align: center;

  color: ${({ theme }) => theme.colors.text};
`;

export const Features = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  gap: 15px;

  margin-bottom: 35px;

  li {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
  }
`;

export const Footer = styled.div`
  margin-top: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 20px;

  h4 {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
  }
`;
export const DesktopContainer = styled.div`
  width: min(1200px, 95%);
  margin: 60px auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  ${media.lessThan('large')`
    grid-template-columns:repeat(2,1fr);
  `}

  ${media.lessThan('medium')`
    display:none;
  `}
`;

export const MobileContainer = styled.div`
  display: none;

  width: 90%;
  margin: 40px auto;

  .swiper {
    padding-bottom: 45px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.text};
    opacity: 0.4;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.line};
    opacity: 1;
  }

  ${media.lessThan('medium')`
    display: block;
  `}
`;
export const Button = styled.button`
  width: 100%;
  height: 55px;

  border: none;
  border-radius: 10px;

  cursor: pointer;

  font-size: 18px;
  font-weight: 600;

  background: ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.white};

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
