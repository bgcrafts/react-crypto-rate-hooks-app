import React, { Component } from 'react';
import './Crypto.css';
import Axios from 'axios';
import CryptoList from './CryptoList';
import axios from 'axios';

const Crypto = () => {
    const[cryptoList, setCryptoList] = useState([]);
    const[filterCryptoList, seFilterCryptoList] = useState('');

    return (
        <div className="Crypto">

        </div>
    )
} 

export default Crypto;