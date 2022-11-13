import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { Box } from '@chakra-ui/react';

const TopPage: NextPageWithLayout = () => {
  return (
    <>
      chakra
      {[...Array(1000).keys()].map((i) => {
        return (
          <Box
            key={i}
            height="68px"
            width="100vw"
            bg="tomato"
            zIndex="11"
            border="1px"
            borderColor="gray.200"
          />
        );
      })}
    </>
  );
};

export default TopPage;
