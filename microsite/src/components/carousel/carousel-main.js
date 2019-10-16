
import React, { Component } from 'react'
// import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel2';

import 'react-owl-carousel2/lib/styles.css';
import './carousel.css';

import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'
// import Banner3 from '../../assets/images/banner3.png'
import Banner4 from '../../assets/images/banner4.png'

export default class CarouselMain extends Component {


    render() {
        const options = {
            autoplay: true,
            autoplayTimeout: 5000,
            // autoplayHoverPause : true,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            dots:true,
            paginationSpeed: 400,
            loop: true,
            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false,
            animateOut: 'fadeOut'
        };

        // const events = {
        //     onDragged: function(event) {...},
        //     onChanged: function(event) {...}
        // };
        return (

            <div className="container-fluid p-0" id="carousel-container">
                <div className="col-12 p-0 owl-theme">
                    <OwlCarousel ref="car" options={options} >
                        <div > <img src={Banner1} className="insight-carousel-banner" alt="Banner1" />
                            <div className="carousel-image-gradient">
                                <div className="carousel-content-wraper">
                                    <p className="carousel-content-area">
                                       The Reboot of Retail
                                    </p>
                                    <p className="carousel-subText" id="subText">
                                46% of responding companies that use the Cloud Foundry Application Runtime see application development times of less than a week, compared with only 16% of non-users.
                                </p>   
                                <a className="carousel_button" href="#/readArticle">READ ARTICLE</a>                             
                                </div>

                            </div>
                            
                        </div>
                        <div>
                            <img src={Banner2} className="insight-carousel-banner" alt="Banner2" />
                            <div className="carousel-image-gradient">
                            <div className="carousel-content-wraper">
                                <p className="carousel-content-area" id="mainText">
                                The Reboot of Retail
                                </p>
                                <p className="carousel-subText" id="subText">
                                46% of responding companies that use the Cloud Foundry Application Runtime see application development times of less than a week, compared with only 16% of non-users.
                                </p>
                                <a className="carousel_button" href="#/readArticle">READ ARTICLE</a>
                            </div>
                            
                        </div>
                        
                        
                        </div>                    
                       
                        <div>
                            <img src={Banner4} className="insight-carousel-banner" alt="Banner4" />
                            <div className="carousel-image-gradient">
                            <div className="carousel-content-wraper">
                                    <p className="carousel-content-area">
                                       The Reboot of Retail
                                    </p>
                                    <p className="carousel-subText" id="subText">
                                46% of responding companies that use the Cloud Foundry Application Runtime see application development times of less than a week, compared with only 16% of non-users.
                                </p>
                                <a className="carousel_button" href="#/readWhitepaper">READ WHITEPAPER</a>
                                </div>
                        </div>
                        
                        </div>
                    </OwlCarousel>


                </div>

            </div>



        )
    }
}
