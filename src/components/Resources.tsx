function Assistance({ assistanceValid, urlValid, loginValid, signal, actionProperty }
: AssistanceProps) {
  return (
    <div>
      <a href={ urlValid }>{ assistanceValid }</a>
      <p>{ loginValid }</p>
      <p>{ signal }</p>
      <button data-testid="remove-btn" onClick={ actionProperty }>Delete!</button>
    </div>
  );
}
    type AssistanceProps = {
      assistanceValid: string,
      urlValid: string,
      signal: string,
      loginValid: string,
      actionProperty: () => void
    };
export default Assistance;
