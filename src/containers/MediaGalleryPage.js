import React, { Component } from 'react';
import { flickerImage, shutterStockVideos } from '../Api/api';

class mediaGalleryPage extends Component {
    componentDidMount() {
        flickerImage('rain').then(images => console.log(images, 'Images'));
        shutterStockVideos('rain').then(videos => console.log(videos, 'Videos'))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default mediaGalleryPage;