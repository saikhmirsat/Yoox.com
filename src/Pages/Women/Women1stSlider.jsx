import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Women1stSlider.css'

const sliderOfImageContainerData = [
    {
        "id": 1,
        "img": "https://www.yoox.com/images/items/50/50287417AM_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand": "8 by YOOX",
        "title": "Earrings",
        "discount": "19",
        "price": "29.00"
    },
    {
        "id": 2,
        "img": "https://www.yoox.com/images/items/15/15245940KN_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand": "8 by YOOX",
        "title": "Long dress",
        "discount": "",
        "price": "170.00"
    },
    {
        "id": 3,
        "img": "https://www.yoox.com/images/items/17/17365751RC_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand": "8 by YOOX",
        "title": "Boots",
        "discount": "30",
        "price": "180.00"
    },
    {
        "id": 4,
        "img": "https://www.yoox.com/images/items/12/12887851CO_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand": "8 by YOOX",
        "title": "Crop top",
        "discount": "",
        "price": "60.00"
    },
    {
        "id": 5,
        "img": "https://www.yoox.com/images/items/50/50283273GQ_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand": "8 by YOOX",
        "title": "Earrings",
        "discount": "",
        "price": "42.00"
    },
    {
        "id": 6,
        "img": "https://www.yoox.com/images/items/15/15241348FV_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand": "8 by YOOX",
        "title": "Midi dress",
        "discount": "",
        "price": "200.00"
    },
    {
        "id": 7,
        "img": "https://www.yoox.com/images/items/46/46867026DP_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand": "8 by YOOX",
        "title": "Socks & tights",
        "discount": "",
        "price": "30.00"
    },
    {
        "id": 8,
        "img": "https://www.yoox.com/images/items/12/12941504EA_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand": "8 by YOOX",
        "title": "Top",
        "discount": "",
        "price": "170.00"
    },
    {
        "id": 9,
        "img": "https://www.yoox.com/images/items/17/17435314GV_14_f.jpg?impolicy=crop&width=306&height=390",
        "brand": "8 by YOOX",
        "title": "Ankle boot",
        "discount": "",
        "price": "240.00"
    },
]
console.log(sliderOfImageContainerData)

export default function Women1stSlider() {

    console.log(sliderOfImageContainerData);
    var settings = {
        autoplay: true,
        speed: 1000,
        // arrows: false,
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='women-1st-crouser-con'>
            <Slider {...settings}>
                {
                    sliderOfImageContainerData.map((ele, i) => <div className='women-1st-con-card'>
                        <img src={ele.img} alt="" />
                        <h4>{ele.title}</h4>
                        <p>{ele.brand}</p>
                        <p>${ele.price}</p>
                    </div>)
                }
            </Slider>
        </div>
    )
}
