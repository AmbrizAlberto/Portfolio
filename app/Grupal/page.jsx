// page.jsx
'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';

import styles from "./prjsviews.css"

import Navbar from '../components/español/navbar';
import Proyectos from './components/projects';

export default function Grupalprjs() {
    const [english, setEnglish] = useState(true); // Set initial state to true for English version

    return (
        <div className='main'>
            <Navbar />
            <Proyectos/>

        <Head>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer />
            <script src='script/scrollreveal.js' async defer />
        </Head>
        </div>
    )
}
