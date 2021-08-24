import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../components/Button';
import { SampleDisplay } from '../components/SampleDisplay';
import { useAppSelector } from '../hooks/redux';
import { clearData, getSample } from '../redux/sample/actions';

export const RootView = (): ReactElement<HTMLElement> => {
  const dispatch = useDispatch();
  const { currentTime, message } = useAppSelector((state) => ({
    currentTime: state.sample.currentTime,
    message: state.sample.message,
  }));

  function onClickGetData(): void {
    dispatch(getSample());
  }

  function onClickClearData(): void {
    dispatch(clearData());
  }

  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-5xl mb-2">It works!</h1>
      <div>
        <Button onClick={onClickGetData}>Click to get data</Button>
        <Button onClick={onClickClearData}>Clear data</Button>
      </div>
      <SampleDisplay currentTime={currentTime} message={message} />
    </section>
  );
};
