import React, { JSX } from 'react';
import * as S from './styles';
interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}
export function Button(props: Props): JSX.Element {
  return (
    <S.Button onClick={props.onClick} className={props.className}>
      {props.text}
    </S.Button>
  );
}
