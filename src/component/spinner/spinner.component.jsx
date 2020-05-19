import React, { Fragment } from 'react';
import spinner from '../../img/spinner.gif';
import '../spinner/spinner.style.css';

const Spinner = () => (
  <Fragment>
    <img src={spinner} alt='Loading...' className='spinner' />
  </Fragment>
);

export default Spinner;
