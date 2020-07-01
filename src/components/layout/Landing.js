import React, { Fragment } from 'react';
import SearchForm from './landing/SearchForm';
import Body from './landing/Body';
import Featured from './landing/Featured';

const Landing = () => {
    return (
       <Fragment>
           <SearchForm/>
           <Body/>
           <Featured/>
       </Fragment>
    )
}

export default Landing
