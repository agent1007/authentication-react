class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  };

  _requestResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      }
    })
      .then((res) => this._requestResult(res))
  }

}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000'
})


export default mainApi;