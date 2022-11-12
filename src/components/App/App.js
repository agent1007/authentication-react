import Header from '../Header/header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';


function App() {

  const initialData = {
    name: '',
    email: '',
    password: ''
  }
  const history = useHistory();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState(initialData)
  const [currentUser, setCurrentUser] = useState({});

  const handleRegister = ({ name, email, password }) => {
    return auth.register(name, email, password)
      .then((res) => {
        history.push('/movies');
        return res;
      })
  }

  const handleLogin = ({ email, password }) => {
    return auth.login(email, password)
      .then(res => {
        if (!res || res.statusCode === 400) throw new Error('Что-то пошло не так');
        if (res.token) {
          setData({ email })
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
        };
      })
  }

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getUserData()
        .then((res) => {
          if (res) {
            setData({
              name: res.name,
              email: res.email,
            })
            setLoggedIn(true);
            history.push(location.pathname)
          }
        })
        .catch((res) => {
          history.push('/signin')
        })
    }
  }, [history])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck])


  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserData()
        .then(data => {
          setCurrentUser(data);
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn])



  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="body">

          <div className="page">
            <Header />
            <Switch>
              <Route path="/signin">
                <Login
                  onLogin={handleLogin} />
              </Route>

              <Route path="/signup">
                <Register
                  onRegister={handleRegister} />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;



