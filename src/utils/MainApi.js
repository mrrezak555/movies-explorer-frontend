class MainApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getUserInfo() {
    return this._request(`${this.baseUrl}/users/me`, {
      credentials: "include",
      method: "GET"
    });
  }

  patchUserInfo(data) {
    return this._request(`${this.baseUrl}/users/me`, {
      credentials: "include",
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data)
    });
  }

  getMovies() {
    return this._request(`${this.baseUrl}/movies`, {
      credentials: "include",
      method: "GET"
    });
  }

  postMovie(movie) {
    return this._request(`${this.baseUrl}/movies`, {
      credentials: "include",
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        ...movie
      })
    });
  }

  deleteMovie(id) {
    return this._request(`${this.baseUrl}/movies/${id}`, {
      credentials: "include",
      method: "DELETE",
      headers: this.headers
    });
  }

  login(data) {
    return this._request(`${this.baseUrl}/signin`, {
      credentials: "include",
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data)
    });
  }

  register(data) {
    return this._request(`${this.baseUrl}/signup`, {
      credentials: "include",
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        ...data
      })
    });
  }

  signout() {
    return this._request(`${this.baseUrl}/signout`, {
      credentials: "include",
      method: "POST"
    });
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
}

export const mainApi = new MainApi({
  // baseUrl: "https://api.movies.best.nomoredomains.monster",
  baseUrl: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
