import React from 'react';
import PropsTypes from 'prop-types';
import Head from 'next/head';

import wrapper from '../store/configureStore';

const Nodebird = ({Component}) => {
  return(
    <>
      <Head>
        <title>λΈλλ²λ</title>
      </Head>
      <Component />
    </>
  )
}

Nodebird.propsTypes = {
  Component : PropsTypes.elementType.isRequired,
}

export default wrapper.withRedux(Nodebird);