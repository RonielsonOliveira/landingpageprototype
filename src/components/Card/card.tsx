import { JSX } from 'react';
import * as S from './styles';
import { Button } from '../Button/button';

interface Props {
  link: string;
  name: string;
  description: string;
  img?: string;
}
export function Card(props: Props): JSX.Element {
  return (
    <S.CardContainer>
      <S.Image>
        <img src={props.img} alt="Imagem do card" />
      </S.Image>
      <S.Info>
        <S.Content>
          <S.Title>{props.name}</S.Title>
          <S.Description>{props.description}</S.Description>
          <S.LinkButton>
            <Button
              text="Link"
              onClick={() =>
                window.open(props.link, '_blank', 'noopener,noreferrer')
              }
            />
          </S.LinkButton>
        </S.Content>
      </S.Info>
    </S.CardContainer>
  );
}
