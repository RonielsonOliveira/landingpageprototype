import { useState } from 'react';

import Heading from '../../Heading';

import MockPlans from '../../../utils/mocks/mockExp.json';

import * as S from './plansStyles';

export function Planos() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plano = MockPlans[selectedPlan];

  return (
    <section id="planos">
      <Heading lineLeft color="white" lineColor="red">
        Escolha o acompanhamento ideal
      </Heading>

      <S.Container>
        <S.PlanList>
          {MockPlans.map((item, index) => (
            <S.PlanCard
              key={item.nome}
              $active={selectedPlan === index}
              onClick={() => setSelectedPlan(index)}
            >
              {item.badge && <S.Badge>{item.badge}</S.Badge>}

              <h3>{item.nome}</h3>

              <span>{item.preco}</span>
            </S.PlanCard>
          ))}
        </S.PlanList>

        <S.PlanInfo>
          <S.Header>
            <div>
              <h2>{plano.nome}</h2>

              <h1>{plano.preco}</h1>
            </div>
          </S.Header>

          <S.Description>{plano.descricao}</S.Description>

          <S.Features>
            {plano.recursos.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </S.Features>

          <S.Footer>
            <h4>🌎 {plano.atendimento}</h4>

            <S.Button>Quero este plano</S.Button>
          </S.Footer>
        </S.PlanInfo>
      </S.Container>
    </section>
  );
}
