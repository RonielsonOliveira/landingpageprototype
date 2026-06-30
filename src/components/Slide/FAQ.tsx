import { useState } from 'react';

import Heading from '../Heading';

import * as S from './faqStyles';

import MockFaq from '../../utils/mocks/mockFaq.json';

export function FAQ() {
  const [selected, setSelected] = useState<number | null>(0);

  const handleOpen = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section id="faq">
      <Heading lineLeft color="black" lineColor="red">
        Perguntas Frequentes
      </Heading>

      <S.Container>
        {MockFaq.map((item, index) => (
          <S.Item key={index}>
            <S.Question onClick={() => handleOpen(index)}>
              <span>{item.question}</span>

              <S.Icon $open={selected === index}>+</S.Icon>
            </S.Question>

            <S.Answer $open={selected === index}>
              <p>{item.answer}</p>
            </S.Answer>
          </S.Item>
        ))}
      </S.Container>
    </section>
  );
}
