import React from 'react';
import Topbar from './Topbar';
import MiddleHeader from './MiddleHeader';
import ColorfulBand from './ColorfulBand';

const Header = () => {
    return (
        <header>
            <Topbar />
            <MiddleHeader />
            <ColorfulBand />
        </header>
    );
};

export default Header;
