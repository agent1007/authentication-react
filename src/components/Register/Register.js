
import { Link, useHistory } from 'react-router-dom';
import { useFormWithValidation } from '../hooks/useForm';

function Register({ onRegister }) {
  const history = useHistory();
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!values.password || !values.email) {
      return;
    }
    onRegister(values)
      .then(resetForm)
      .then(() => history.push('/movies'))

      .catch(err => console.log(err))
  }

  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__inputs">
          <div className="register__input-container">
            <p className="register__input-text">Имя</p>
            <input
              type="text"
              name='name'
              className="register__input"
              id="name"
              value={values.name || ''}
              onChange={handleChange}
              minLength='2'
              maxLength='40'
              pattern='[a-zA-Zа-яА-Я -]{1,}'
              required
            />
            <span
              id="name-error"
              className="error error_register"
            > {errors.name || ''}</span>
          </div>
          <div className="register__input-container">
            <p className="register__input-text">E-mail</p>
            <input
              type="email"
              name='email'
              className="register__input"
              id="email"
              value={values.email || ''}
              onChange={handleChange}
              required minLength={2} maxLength={40}
            />
            <span
              id="email-error"
              className="error error_register"
            > {errors.email || ''}</span>
          </div>
          <div className="register__input-container">
            <p className="register__input-text">Пароль</p>
            <input
              type="password"
              name='password'
              className="register__input"
              id="password"
              value={values.password || ''}
              onChange={handleChange}
              required minLength={2} maxLength={40}
            />
            <span
              id="password-error"
              className="error error_register"
            > {errors.password || ''}</span>
          </div>
        </div>
        <button
          type="submit"
          className={`register__submit-button ${!isValid && "register__submit-button_disabled"
            }`}
          disabled={!isValid}
        >Зарегистрироваться
        </button>
      </form>
      <div className="register__container">
        <p className="regiser__text">Уже зарегистрированы?</p>
        <Link to="/signin" className="regiser__link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;