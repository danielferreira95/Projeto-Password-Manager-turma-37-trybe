import { useState } from 'react';
import './App.css';
import Form, { AssistanceProps } from './components/Form';
import Service from './components/Resources';

function App() {
  const [formShow, setFormShow] = useState(false);
  const [listAssistance, setAssistance] = useState<AssistanceProps[]>([]);
  const [buryBtn, setBuryBtn] = useState(true);
  const [isShShow, setIsShShow] = useState(true);
  const reversalBtn: any = (service: AssistanceProps) => {
    setAssistance([...listAssistance, service]);
    setFormShow(!formShow);
    setBuryBtn(!buryBtn);
  };

  const eliminate = (service: AssistanceProps) => {
    const attAssistance = listAssistance.filter((listFound) => service
      .assistanceValid !== listFound.assistanceValid);
    setAssistance(attAssistance);
    setBuryBtn(false);
  };

  const handleToggleVisible = () => {
    setIsShShow((ShownSh) => !ShownSh);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {formShow && <Form
        pointBtn={ reversalBtn }
        dltBtn={ () => setFormShow(false) }
      />}
      {!formShow && (
        <button onClick={ () => setFormShow(true) }>
          Cadastrar nova senha
        </button>
      )}
      <div>
        { buryBtn && <h3>Nenhuma senha cadastrada</h3> }
      </div>
      <div>
        {listAssistance.map((service) => (<Service
          key={ service.assistanceValid }
          assistanceValid={ service.assistanceValid }
          urlValid={ service.urlValid }
          loginValid={ service.loginValid }
          signal={ isShShow ? service.signal : '******' }
          actionProperty={ () => eliminate(service) }
        />))}
      </div>
      {!buryBtn && (
        <div>
          <label>
            <input
              onChange={ handleToggleVisible }
            />
          </label>
        </div>
      )}

    </div>
  );
}
export default App;
