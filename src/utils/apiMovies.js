class MoviesApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getMovies() {
    return this._request(`${this.baseUrl}/beatfilm-movies`);
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

export const apiMovies = new MoviesApi({
  baseUrl: "https://api.movies.best.nomoredomains.monster/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
