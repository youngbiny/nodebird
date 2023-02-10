import React from 'react';
import PropsTypes from 'prop-types';
import Head from 'next/head';

import wrapper from '../store/configureStore';

const Nodebird = ({Component}) => {
  return(
    <>
      <Head>
        <title>노드버드</title>
      </Head>
      <Component />
    </>
  )
}

Nodebird.propsTypes = {
  Component : PropsTypes.elementType.isRequired,
}

export default wrapper.withRedux(Nodebird);