import React, { Component } from 'react'
import $ from 'jquery';
import { Carousel, CarouselItem } from 'react-bootstrap';
import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'
import Banner3 from '../../assets/images/banner3.png'
import Banner4 from '../../assets/images/banner4.png'
import './carousel.css'
export default class carousel extends Component {
    componentDidMount() {
        const _this =this;

        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                autoplay : true,
                autoplayTimeout : 5000,
                // autoplayHoverPause : true,
                navigation : true, // Show next and prev buttons
                slideSpeed : 300,
                paginationSpeed : 400,
                loop: true,
                items : 1, 
                itemsDesktop : false,
                itemsDesktopSmall : false,
                itemsTablet: false,
                itemsMobile : false,
                animateOut: 'fadeOut'
            });
    
            // ($(".owl-carousel")).on('changed.owl.carousel',function(event){
            //     _this.dragOver(event);
            // })
          });

    }
    render() {
        return (
            <div class="owl-carousel owl-theme">
             <div> <img src={Banner1}/></div>
             <div> Your Content </div>
             <div> Your Content </div>
             <div> Your Content </div>
             <div> Your Content </div>
             <div> Your Content </div>
             <div> Your Content </div>
            </div>
        )
    }
}
