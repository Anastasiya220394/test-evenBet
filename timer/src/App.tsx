import React, { useRef } from 'react';

import { LeftBlock, RightBlock, BtnStart } from './components';

import './App.css';

export const App = (): JSX.Element => {
    const circleRef = useRef(null);
    const RightBlockRef = useRef(null);

    return (
      <div className="App">
        <div className="wrapper">
          <LeftBlock circleRef={circleRef}/>
          <RightBlock RightBlockRef={RightBlockRef}/>
        </div>
        <BtnStart RightBlockRef={RightBlockRef} circleRef={circleRef}/>
      </div>
    );
}
