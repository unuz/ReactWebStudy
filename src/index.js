import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; //app위의 상위 컴포넌트
import store from './store/store'; //최상위 컴포넌트에 store를 공급
import withSplitting from './js/withSplitting';


export const Home = withSplitting(() => import('./routes/Home'));
export const About = withSplitting(() => import('./routes/About'));

ReactDOM.render( /* store 사용 한번만 선언해 주면 됨 */
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);