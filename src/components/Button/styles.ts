import styled from 'styled-components';
import theme from '../../styles/theme';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.line};
  border: none;
  cursor: pointer;
  padding: 12px 25px;
  gap: 10px;
  color: ${theme.colors.white};
  transition: background-color 300ms ease-in-out;
  border-radius: 4px;
`;
