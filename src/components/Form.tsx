import { useState } from 'react';

export type AssistanceProps = {
  assistanceValid: string;
  urlValid: string;
  signal: string;
  loginValid: string;
  operationProperty: () => void;
};

type PropForm = {
  dltBtn: () => void;
  pointBtn: (service: any) => void;
};

function Form({ dltBtn, pointBtn }: PropForm) {
  const [assistanceValid, setAssistanceValid] = useState('');
  const [urlValid, setUrlValid] = useState('');
  const [signal, setSignal] = useState('');
  const [loginValid, setLoginValid] = useState('');
  const [apparentBtn, setApparentBtn] = useState(false);
  const checkSize = signal.length >= 8;
  const checkLengthy = signal.length <= 16;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pointBtn({ assistanceValid, loginValid, signal, urlValid });
  };
  const checkContent = /[a-zA-Z]/.test(signal) && /\d/.test(signal);
  const checkCarac = /[!@#$%^&*(),.?":{}|<>]/.test(signal);

  const checkBtn = () => {
    const isNameServiceValid = !!assistanceValid.trim();
    const isLoginValid = !!loginValid.trim();
    const isShAcceptable = checkSize && checkLengthy && checkContent && checkCarac;

    setApparentBtn(isNameServiceValid && isLoginValid && isShAcceptable);
  };
  const shCheck = 'valid-password-check';
  const Sh = 'invalid-password-check';
  function checkSh(validate: boolean) {
    return validate ? shCheck : Sh;
  }

  return (
    <form onSubmit={ (e) => e.preventDefault() }>
      <label htmlFor="name">Nome do serviço</label>
      <input
        type="text"
        name="name"
        id="name"
        value={ assistanceValid }
        onChange={ (e) => {
          setAssistanceValid(e.target.value);
          checkBtn();
        } }
      />

      <label htmlFor="login">Login</label>
      <input
        type="text"
        name="loginValid"
        id="login"
        value={ loginValid }
        onChange={ (e) => {
          setLoginValid(e.target.value);
          checkBtn();
        } }
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        name="password"
        id="password"
        value={ signal }
        onChange={ (e) => {
          setSignal(e.target.value);
          checkBtn();
        } }
      />

      <span className={ checkSh(signal.trim().length >= 8) }>
        Possuir 8 ou mais caracteres
      </span>
      <span className={ checkSh(signal.trim().length <= 16) }>
        Possuir até 16 caracteres
      </span>
      <span className={ checkSh(checkContent) }>
        Possuir letras e números
      </span>
      <span className={ checkSh(checkCarac) }>
        Possuir algum caractere especial
      </span>

      <label htmlFor="url">URL</label>
      <input
        type="text"
        name="urlValid"
        id="url"
        value={ urlValid }
        onChange={ (e) => setUrlValid(e.target.value) }
      />

      <button onClick={ handleSubmit } disabled={ !apparentBtn }>
        Cadastrar
      </button>
      <button onClick={ dltBtn }>
        Cancelar
      </button>
    </form>
  );
}

export default Form;
