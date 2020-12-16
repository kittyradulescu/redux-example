import React from 'react';
import './App.css';
import {EventsConnector} from "./EventsConnector";
const util = require('util');
const fsReaddir = require('fs-readdir');

const IMAGE_HEIGHT = 180;
const IMAGE_WIDTH = 180;

function readImage(path) {
    const imageBuffer = fsReaddir(path);
    console.log(imageBuffer);
    //const tfimage = tfnode.node.decodeImage(imageBuffer, 3);
    // const smallimg = tf.image.resizeBilinear(tfimage, [IMAGE_HEIGHT, IMAGE_WIDTH])
    // const floatimg = tf.cast(smallimg, 'float32');
    //
    // return floatimg;
}

async function loadImagesDir({images}, dir) {
    let file_count = 0;
    try {
        const files = await fsReaddir(dir);
        files.forEach(function (file) {
            if (/^(?!\._).*\.((png)|(jpg)|(jpeg)|(gif))$/gi.test(file)) {
                console.log(file);
                let this_image = readImage(dir + '/' + file);
                images.push(this_image);
                file_count++;
            }
        });
    } catch (err) {
        console.error('Unable to scan directory: ' + err);
    }
    return file_count;
}


async function loadImages() {
    const images = [];
    let labels = [];
    let imgcount = await loadImagesDir({images}, 'flower_photos/daisy');
    console.log(imgcount);
}

function App() {
    //loadImages().then(r => console.log(r));
    return <EventsConnector/>
}

export default App;
