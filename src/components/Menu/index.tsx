import { JSX, useState } from 'react';
import * as S from './styles';
import { FaBars, FaTimes, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export function Menu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.MenuGroup>
          <S.SocialGroup>
            <S.LinkedinLink href="#">
              <FaInstagram size={28} />
            </S.LinkedinLink>
            <S.GithubLink href="#">
              <FaWhatsapp size={28} />
            </S.GithubLink>
          </S.SocialGroup>
          <S.NavGroup>
            <S.MenuLink href="#inicio">Inicio</S.MenuLink>
            <S.MenuLink href="#sobre">Sobre</S.MenuLink>
            <S.MenuLink href="#planos">Planos</S.MenuLink>
            <S.MenuLink href="#beneficios">Beneficios</S.MenuLink>
            <ThemeToggle />
          </S.NavGroup>
        </S.MenuGroup>
        <S.MobileIcon>
          <FaBars size={28} onClick={() => setIsOpen(true)} />
          <ThemeToggle />
        </S.MobileIcon>
      </S.Wrapper>

      <S.MenuFull isOpen={isOpen}>
        <S.CloseIcon onClick={() => setIsOpen(false)}>
          <FaTimes size={28} />
        </S.CloseIcon>

        <S.MenuNav>
          <S.NavGroup>
            <S.MenuLink href="#inicio" onClick={() => setIsOpen(false)}>
              Inicio
            </S.MenuLink>
            <S.MenuLink href="#sobre" onClick={() => setIsOpen(false)}>
              Sobre
            </S.MenuLink>
            <S.MenuLink href="#planos" onClick={() => setIsOpen(false)}>
              Planos
            </S.MenuLink>
            <S.MenuLink href="#beneficios" onClick={() => setIsOpen(false)}>
              Beneficios
            </S.MenuLink>
          </S.NavGroup>

          <S.SocialGroup>
            <S.LinkedinLink href="#">
              <FaInstagram size={32} />
            </S.LinkedinLink>

            <S.GithubLink href="#">
              <FaWhatsapp size={32} />
            </S.GithubLink>
          </S.SocialGroup>
        </S.MenuNav>
      </S.MenuFull>
    </>
  );
}

export default Menu;
