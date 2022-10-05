import React, { useState } from 'react'
import styled from 'styled-components'

import { storage } from '../firebase.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import axios from '../axios.js';
import { useEffect } from 'react';
// const dotenv = require('dotenv');
// dotenv.config();


function ImageUpload() {
    // useEffect(() => {
    //     console.log(process.env);
    // }, [])

    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);

    const handleUpload = (event) => {
        event.preventDefault();
        const caption = document.querySelector('#caption').value;
        const username = document.querySelector('#username').value;
        const file = event.target[2].files[0];
        
        uploadFiles(file);
        axios.post('/upload', {
            caption: caption,
            user: username,
            image: url,
        })
    }

    const uploadFiles = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setProgress(prog);
        },
        (err) => (console.log(err)),
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then(uri => setUrl(uri))
        })
    }

  return (
    <Container onSubmit={handleUpload}>
        <label htmlFor='username'>Username</label>
        <input id="username" name='username' type='text' />

        <label htmlFor='caption'>Caption</label>
        <input id='caption' name='caption' type='text' />

        <label htmlFor='image'>Upload Image</label>
        <input id="image" name='image' type='file' accept='image/*' alt='submit' />

        <button type='submit'>Send</button>

        <h4>Uploaded: {progress}%</h4>
    </Container>
  )
}

export default ImageUpload

const Container = styled.form`
    border: 1px solid purple;
    width: 100vw;
    height: 50vh;
`