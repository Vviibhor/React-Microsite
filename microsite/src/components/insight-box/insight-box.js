import React, { Component } from 'react'
import './insight-box.css';
import AOS from 'aos';

export default class InsightBox extends Component {
    componentDidMount(){
        AOS.init()
    }
    render() {
        return (
            <div className="insight-box">               
                    <p data-aos="fade-up" data-aos-duration="1100" data-aos-offset="0" className="header_title" >Our Insights</p>
                    <div data-aos="fade-up" data-aos-duration="1100" data-aos-offset="0" className="header_underline"></div>
                    <p data-aos="fade-up" data-aos-duration="1100" data-aos-offset="0" className="header_desc" >Cognizant leaders understand digital strategy and big thinking. Discover innovative strategies from our subject matter experts world wide on the latest digital business, industry and technology trends. Our experts share valuable insights in whitepapers, articles and more, which you can use to get ahead. </p>
            </div >
        )
    }
}
