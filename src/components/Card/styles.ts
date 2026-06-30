import styled from 'styled-components';
import media from 'styled-media-query';

export const CardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.mainBg};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  }
`;

export const Image = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: ${({ theme }) => theme.colors.card};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Info = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.card};

  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: clamp(18px, 2vw, 22px);
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const LinkButton = styled.div`
  margin-top: auto;
  align-self: flex-start;
  width: 100%;
  ${media.lessThan('medium')`
  Button{
    width: 100%;

  }


  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
