import { makeAutoObservable } from 'mobx';

class LoaderStore {
  isLoad = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadStart() {
    this.isLoad = true;
  }

  loadEnd() {
    this.isLoad = false;
  }
}

export default new LoaderStore();
