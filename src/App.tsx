import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Loader from './components/Loader/Loader';
import { observer } from 'mobx-react-lite';

import loaderStore from './store/LoaderStore';

const App = observer(() => {
  return (
    <>
      {loaderStore.isLoad && <Loader />}
      <Header />
      <Main />
    </>
  );
});

export default App;
