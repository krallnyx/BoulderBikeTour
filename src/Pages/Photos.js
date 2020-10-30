import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import queryString from 'query-string';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

export default class Photos extends Component {
    constructor(props) {
        super(props)
        this.flickraddress = this.flickraddress.bind(this)
        this.getImages = this.getImages.bind(this)
            this.state = {
                images: [],
                hasMoreItems: true,
                loadMore: true,
                page: 1
            }
    }

    flickraddress(page) {
        const address = "https://api.flickr.com/services/rest/?"
        return address + queryString.stringify({
            page: page,
            method: "flickr.photos.search",
            tags: "bikerace,boulderbiketour",
            api_key: '7d17ebab799fa0e89cc438a24a6b5b24',
            format: 'json',
            nojsoncallback: 1,
            per_page: 40
        })
    }

    imageaddress(item) {
        if (item.farm != 0){
        return (
            'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg');
    }}

    getImages(page) {
        axios.get(this.flickraddress(page))
            .then(response => {
                    var images = this.state.images
                    response.data.photos.photo.map((image, index) => {
                        images.push(image)
                    })
            this.setState({images: images})
            this.setState((prevState, props) => ({
                page: prevState.page + 1
            })); 
            })
        .catch((error) => console.log(error))
    }


render(){
    const loader = <div className="loader">Loading ...</div>;
    var items = [];
    this.state.images.map( (data, index) => {
        items.push(
        <img className="col-12 col-md-6 col-lg-4 col-xl-3 my-3" src={this.imageaddress(data)} key={index} alt="" />

        )
    })

    return (
            <div className="container-fluid">
            <InfiniteScroll
            pageStart={0}
            initialLoad={true}
            loadMore={this.getImages}
            hasMore={this.state.hasMoreItems}
            loader={<div key={0}>{loader}</div>}>
            {items}
            </InfiniteScroll>
            <ScrollUpButton />
            </div>
           )
}
}