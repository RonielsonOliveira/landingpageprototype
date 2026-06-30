import { JSX, useState } from 'react';
import * as S from './styles';
import {
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export function Menu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.Wrapper>
        <S.MenuGroup>
          <S.SocialGroup>
            <S.LinkedinLink href="https://www.linkedin.com/in/ronielsonoliveira">
              <FaInstagram size={28} />
            </S.LinkedinLink>
            <S.GithubLink href="https://github.com/RonielsonOliveira">
              <FaWhatsapp size={28} />
            </S.GithubLink>
          </S.SocialGroup>
          <S.NavGroup>
            <S.MenuLink href="#inicio">Inicio</S.MenuLink>
            <S.MenuLink href="#sobre">Sobre</S.MenuLink>
            <S.MenuLink href="#projetos">Projetos</S.MenuLink>
            <S.MenuLink href="#experiencia"> Experiência</S.MenuLink>
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
            <S.MenuLink href="#projetos" onClick={() => setIsOpen(false)}>
              Projetos
            </S.MenuLink>
            <S.MenuLink href="#experiencia" onClick={() => setIsOpen(false)}>
              Experiência
            </S.MenuLink>
          </S.NavGroup>

          <S.SocialGroup>
            <S.LinkedinLink href="https://www.linkedin.com/in/ronielsonoliveira">
              <FaLinkedin size={32} />
            </S.LinkedinLink>

            <S.GithubLink href="https://github.com/RonielsonOliveira">
              <FaGithub size={32} />
            </S.GithubLink>
          </S.SocialGroup>
        </S.MenuNav>
      </S.MenuFull>
    </>
  );
}

export default Menu;
