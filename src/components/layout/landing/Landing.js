import React, { Fragment } from 'react';
import SearchForm from './SearchForm';
import Body from './Body';
import Featured from './Featured';

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
