import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { styled } from '@linaria/react';

const TopPage: NextPageWithLayout = () => {
  const Div = styled.div`
    background-color: tomato;
    width: 100vw;
    height: 68px;
    z-index: 11;
    border: 1px solid;
    border-color: #e2e8f0;
  `;
  return (
    <>
      linaria
      {[...Array(1000).keys()].map((i) => {
        return <Div key={i} />;
      })}
    </>
  );
};

export default TopPage;
