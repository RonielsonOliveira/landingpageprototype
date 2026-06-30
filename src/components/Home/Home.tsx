import React, { JSX } from 'react';

import * as S from './styles';

import { Planos } from '../Sections/ExperienceSection/Planos';
import { FAQ } from '../Slide/FAQ';
import { Beneficios } from '../Sections/TecnologiesSection/Beneficios';
import { Sobre } from '../Sections/SobreSection/sobre';

export function Home(): JSX.Element {
  return (
    <S.Container>
      <section id="inicio">
        <Sobre />
        <Planos />
        <FAQ />

        <Beneficios />
      </section>
    </S.Container>
  );
}
