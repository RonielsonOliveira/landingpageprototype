import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: min(900px, 90%);
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Item = styled.div`
  background: ${({ theme }) => theme.colors.card};

  border-radius: 10px;

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.border};

  transition: 0.3s;
`;

export const Question = styled.button`
  width: 100%;

  border: none;

  background: transparent;

  padding: 22px 28px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.text};

  font-size: 20px;

  font-weight: 600;

  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.line};
  }

  ${media.lessThan('medium')`

      font-size:17px;
      padding:18px;

  `}
`;

type IconProps = {
  $open: boolean;
};

export const Icon = styled.div<IconProps>`
  font-size: 28px;

  font-weight: bold;

  color: ${({ theme }) => theme.colors.line};

  transition: 0.3s;

  transform: ${({ $open }) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
`;

type AnswerProps = {
  $open: boolean;
};

export const Answer = styled.div<AnswerProps>`
  max-height: ${({ $open }) => ($open ? '300px' : '0')};

  overflow: hidden;

  transition: all 0.15s ease;

  p {
    padding: ${({ $open }) => ($open ? '0 28px 24px' : '0 28px')};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.8;
  }

  ${media.lessThan('medium')`
    p {
      padding-left: 18px;
      padding-right: 18px;
      padding-bottom: ${({ $open }: AnswerProps) => ($open ? '18px' : '0')};
    }
  `}
`;
