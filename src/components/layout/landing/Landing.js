import React from 'react';
import SearchForm from './SearchForm';
import Body from './Body';
import Featured from './Featured';

const Landing = () => {
    return (
       <div className="prevent-hor-scroll">
           <SearchForm/>
           <Body/>
           <Featured/>
       </div>
    )
}

export default Landing
