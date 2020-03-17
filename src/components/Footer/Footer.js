import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <div>
            {'Diegox - ' + new Date().getFullYear()}
        </div>
    );
}

export default Footer;