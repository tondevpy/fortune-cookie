import { useEffect, useState } from 'react';
import style from './App.module.css';
import FurtuneCookie from './assets/biscoito.png';
import api from './service/api';

function App() {
  const [ativo, setAtivo] = useState(false);
  const [mensagem, setMensagem] = useState(null);

  const consumir = async () => {
    const response = await api.get('');
    setMensagem(response.data.slip);
  };
  useEffect(() => {
    consumir();
  }, [ativo]);
  function openCookie() {
    setAtivo(true);

    console.log(mensagem);
  }
  function reativar() {
    setAtivo(false);
  }

  return (
    <div className={style.fortuneCookie}>
      <div className={style.cookieForm}>
        <h1>
          Open Your <span>Fortune Cookie</span>
        </h1>
        <div className={style.cookie}>
          <div>
            <img
              src={FurtuneCookie}
              alt=""
              title="Click here"
              onClick={openCookie}
            />
          </div>
        </div>
        <div className={style.message}>
          <p title="Clique aqui" onClick={reativar}>
            {ativo ? mensagem.advice : ''}
          </p>
        </div>

        <div className={style.info}>
          <div>
            <p>Click the cookie to reveal your fortune.</p>
            <p>Clicking the message minimizes the cookie.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
