import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps, LineColors } from '.';

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    border-left: 0.7rem solid ${theme.colors.line};
    margin-left: ${theme.font.sizes.small};

    ${media.lessThan('medium')`
      border-left: none;
      font-size: ${theme.font.sizes.xlarge};
      border-bottom: 0.15rem solid ${theme.colors.line};
      width: 100%;

     a{
      font-size:30px;
       margin: 0 auto;
      text-align: center;
      width: 100%;
      text-align: center;
      margin-right: 0.7rem;
     }
        `}
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors[color!]};
    padding-left: ${theme.spacings.xxsmall};
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
