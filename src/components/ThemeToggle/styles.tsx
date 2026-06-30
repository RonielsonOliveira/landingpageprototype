import styled from 'styled-components';

export const ThemeButton = styled.button`
  width: 46px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;
  transition: 0.3s ease;

  svg {
    font-size: 20px;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }
`;
