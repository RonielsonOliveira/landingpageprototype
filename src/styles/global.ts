'use client';

import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle<{ removeBg?: boolean }>`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'),
      url('/fonts/poppins-v21-latin-300italic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'),
      url('/fonts/poppins-v21-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'),
      url('/fonts/poppins-v21-latin-600.woff2') format('woff2');
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  ${({ theme, removeBg }) => css`
    html,
    body,
    #root,
    #__next {
      width: 100%;
      min-height: 100vh;
      overflow-x: hidden;
      background-color: ${!removeBg ? theme.colors.mainBg : 'transparent'};
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      line-height: 1.5;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      color: ${theme.colors.text};

      transition:
        background-color 0.3s ease,
        color 0.3s ease;
    }

    main {
      width: 100%;
      min-height: 100vh;
      background-color: ${!removeBg ? theme.colors.mainBg : 'transparent'};
    }
  `}

  img,
  svg {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
    width: 100%;
  }

  .cardContainer {
    width: 100%;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;

    background: #000;
    border-radius: 8px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .cardContainer:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }

  .cardContainer img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 6px;
  }

  .cardContainer h3 {
    color: #fff;
    text-align: center;
    font-size: 1.8rem;
  }

  .cardContainer a {
    width: 100%;
    padding: 10px;
    background: #41e1ba;
    color: #000;
    border-radius: 6px;
    font-weight: 600;
    text-align: center;
  }

  .cardContainer a:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1024px) {
    .cards {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  }

  @media (max-width: 640px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }
`;

export default GlobalStyles;
