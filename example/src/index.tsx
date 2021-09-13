import React from 'react';
import ReactDOM from 'react-dom';

import { inject } from '../../src';
import { Header, Footer } from './components';

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Footer />
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

window.addEventListener('load', () => inject());