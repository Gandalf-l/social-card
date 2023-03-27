import { makeAutoObservable } from 'mobx';
import { UserI } from '../common/interfaces/User.interface';
import userApi from '../api/UsersApi';
import loaderStore from './LoaderStore';
import getId from '../common/helpers/getId';

class UsersStore {
  users: UserI[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  * getMoreUsers() {
    loaderStore.loadStart();
    const users = yield userApi.getUsers();
    loaderStore.loadEnd();
    this.users = [...this.users, ...users, ...users.map((user) => {
      return {
        ...user, id: getId()
      };
    })];
  }

  addUser(user: UserI) {
    this.users = [{ ...user, id: getId() }, ...this.users];
  }

  editUser(user: UserI) {
    this.users = this.users.map((data) => {
      if (user.id === data.id) {
        return {
          ...data,
          ...user
        };
      }
      return data;
    });
  }

  getUserById(id: number): UserI {
    return this.users.find((user) => user.id === id);
  }
}

export default new UsersStore();
