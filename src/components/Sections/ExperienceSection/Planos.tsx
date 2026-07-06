import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/swiper.css';
import 'swiper/css/pagination';

import Heading from '../../Heading';
import MockPlans from '../../../utils/mocks/mockExp.json';

import * as S from './plansStyles';

export function Planos() {
  return (
    <section id="planos">
      <Heading lineLeft color="white" lineColor="red">
        Escolha o acompanhamento ideal
      </Heading>

      {/* Desktop */}
      <S.DesktopContainer>
        {MockPlans.map((plano) => (
          <S.PlanCard
            key={plano.nome}
            $featured={plano.badge === 'MAIS ESCOLHIDO'}
          >
            {plano.badge && <S.Badge>{plano.badge}</S.Badge>}

            <S.Header>
              <h2>{plano.nome}</h2>
              <h1>{plano.preco}</h1>
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
          </S.PlanCard>
        ))}
      </S.DesktopContainer>

      {/* Mobile */}
      <S.MobileContainer>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {MockPlans.map((plano) => (
            <SwiperSlide key={plano.nome}>
              <S.PlanCard $featured={plano.badge === 'MAIS ESCOLHIDO'}>
                {plano.badge && <S.Badge>{plano.badge}</S.Badge>}

                <S.Header>
                  <h2>{plano.nome}</h2>
                  <h1>{plano.preco}</h1>
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
              </S.PlanCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.MobileContainer>
    </section>
  );
}
