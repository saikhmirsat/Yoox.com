import React from 'react'
import './Women2ndSlider.css'

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
export default function Women2ndSlider() {
    return (
        <div className='women-2nd-con-slider'>
            {
                sliderOfImageContainerData.map((ele, i) => <div className='women-2nd-con-card'>
                    <img src={ele.img} alt="" />
                    <h4>{ele.title}</h4>
                    <p>{ele.brand}</p>
                    <p>${ele.price}</p>
                </div>)

            }
        </div>
    )
}
