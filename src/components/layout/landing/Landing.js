import React from 'react';
import SearchForm from './SearchForm';
import Body from './Body';
import Featured from './Featured';
import ScrollToTop from '../ScrollToTop';

const Landing = () => {
    return (
       <div className="prevent-hor-scroll">
           <ScrollToTop />
           <SearchForm/>
           <Body/>
           <Featured/>
       </div>
    )
}

export default Landing
