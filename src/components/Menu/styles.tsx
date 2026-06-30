import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.spacings.small};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: ${theme.layers.menu};
    background: ${theme.colors.headerBg};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    transition:
      background 0.3s ease,
      border-color 0.3s ease;

    ${media.lessThan('medium')`
      padding: 0 16px;
    `}
  `}
`;
export const MobileIcon = styled.div`
  display: none;

  ${media.lessThan('medium')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `}
`;
export const Left = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    width: 2.2rem;
    height: 2.2rem;

    display: flex;
    align-items: center;

    cursor: pointer;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const CloseIcon = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacings.medium};
    right: ${theme.spacings.medium};

    color: ${theme.colors.text};
    cursor: pointer;
  `}
`;

export const MenuGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const SocialGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.spacings.xxsmall};
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.text};

    position: relative;
    cursor: pointer;

    font-size: ${theme.font.sizes.xxlarge};
    margin: 0.3rem ${theme.spacings.xxsmall} 0;

    text-decoration: none;

    &:hover::after {
      content: '';
      position: absolute;

      display: block;
      height: 2px;

      width: 100%;
      left: 0;
      bottom: -4px;

      background-color: ${theme.colors.line};
      animation: hoverAnimation 0.2s forwards;
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  `}
`;

export const IconLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;

    font-size: ${theme.font.sizes.medium};

    margin: 1.4rem 10px auto;

    text-decoration: none;

    &:hover::after {
      content: '';
      position: absolute;
      display: block;

      height: 0.3rem;

      animation: hoverAnimation 0.3s forwards;
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  `}
`;

export type MenuFullProps = {
  isOpen: boolean;
};

export const MenuNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: ${theme.spacings.xsmall};
    width: 100%;
  `}
`;

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    inset: 0;

    width: 100vw;
    height: 100svh;

    background: ${theme.colors.mainBg};
    z-index: ${theme.layers.menu};

    display: flex;
    align-items: center;
    justify-content: center;

    overflow-y: auto;

    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    transition: opacity 0.3s ease;

    ${MenuNav} {
      gap: ${theme.spacings.xsmall};
    }

    ${NavGroup} {
      flex-direction: column;
      gap: ${theme.spacings.xsmall};
    }

    ${SocialGroup} {
      margin-top: ${theme.spacings.xsmall};
    }

    ${MenuLink} {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;

export const LinkedinLink = styled(IconLink)`
  color: ${({ theme }) => theme.colors.red};

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const GithubLink = styled(IconLink)`
  color: ${({ theme }) => theme.colors.secondary};

  &:hover::after {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
