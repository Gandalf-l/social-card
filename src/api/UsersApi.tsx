import { UserI } from '../common/interfaces/User.interface';
import getId from '../common/helpers/getId';

class UsersApi {
  url = 'https://jsonplaceholder.typicode.com';

  performRequest(url: string, method = 'GET', body: any = undefined) {
    return fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    }).then(response => response.json());
  }

  getUsers(): Promise<UserI[]> {
    return this.performRequest(`${this.url}/users`)
      .then((users: UserI[]) => {
        return users.map((user) => {
          return {
            ...user,
            id: getId()
          };
        });
      });
  }

  getPhoto() {

  }
}

export default new UsersApi();
