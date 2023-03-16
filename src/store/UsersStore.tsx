import { makeAutoObservable } from 'mobx';
import { UserI } from '../common/interfaces/User.interface';
import userApi from '../api/UsersApi'

class UsersStore {
  users: UserI[] = [];

  constructor() {
    makeAutoObservable(this)
  }

   *getMoreUsers() {
    const users = yield this.fetchSocialCards();
    this.users = [...this.users, ...users];
  }

  fetchSocialCards() {
    return userApi.getUsers();
  }
}

export default new UsersStore()
