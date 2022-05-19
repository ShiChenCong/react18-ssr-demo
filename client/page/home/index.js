import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getImgUrl } from '../../store/index';
import './index.css';
import Spinner from '../../component/spin';

const Child = React.lazy(() => import('./component-suspense'));

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((globalState) => globalState);

  return (
    <div
      className="home"
    >
      this is React App render in server
      {/* <img src={state.url} alt="scc"></img> */}
      <div
        onClick={() => {
          dispatch(getImgUrl());
        }}
      >
        {state.url}
      </div>
      <Suspense fallback={<Spinner />}>
        <Child />
      </Suspense>
      <Link to="/login">go</Link>
    </div>
  );
}
