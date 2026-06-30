import Heading from '../../Heading';
import * as S from './beneficiosStyles';

import MockBenefits from '../../../utils/mocks/mockBenefits.json';
import { IconCase } from '../../../utils/ServerCaseIcon';

type Benefit = {
  title: string;
  iconName: string;
  description: string;
};

export function Beneficios() {
  return (
    <section id="beneficios">
      <Heading lineLeft color="black" lineColor="red">
        Benefícios do acompanhamento
      </Heading>

      <S.Container>
        {MockBenefits.map((item: Benefit) => (
          <S.Card key={item.title}>
            <S.Icon>{IconCase(item.iconName)}</S.Icon>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </S.Card>
        ))}
      </S.Container>
    </section>
  );
}
