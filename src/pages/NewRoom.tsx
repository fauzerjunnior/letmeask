import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';

const NewRoom: React.FC = () => {
  const { user } = useAuth();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(user);
  }, [user]);

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask!" />
          <h2>Criar uma nova sala</h2>

          <form>
            <input type="text" placeholder="Nome da sala" />

            <Button type="submit">Criar sala</Button>
          </form>

          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
