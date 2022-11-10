import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import styles from './test.module.scss';

const TopPage: NextPageWithLayout = () => {
  return (
    <>
      {[...Array(1000).keys()].map((i) => {
        return <div key={i} className={styles.test} />;
      })}
    </>
  );
};

export default TopPage;
