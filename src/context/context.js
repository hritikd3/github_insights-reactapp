import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';


//now we have accces to the provider ,consumer - GithubProvider.Provider
const GithubContext= React.createContext();
const GithubProvider=({children})=>{
return (
    <GithubContext.Provider value={'testing '}>
        {children}
    </GithubContext.Provider>
);
};

export { GithubProvider, GithubContext };


