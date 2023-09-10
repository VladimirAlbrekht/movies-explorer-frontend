import './Login.css';
import Entrance from "../Entrance/Entrance";

function Login({onLogin, infoMessage}){

  //---РАЗМЕТКА JSX---
  return (
    <Entrance
      type='signin'
      linkTo='/signup'
      title='Рады видеть!'
      btnName='Войти'
      subtitle='Ещё не зарегистрированы?'
      onSubmit={onLogin}
      linkName='Регистрация'
      infoMessage={infoMessage}
    />
  );
};
 
export default Login;