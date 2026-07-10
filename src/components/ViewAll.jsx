import React, { useState } from "react";
import Navbar from "./Navbar";

const ViewAll = () => {

  const [data,changeData] = useState([
  {
    "name": "Samsung Galaxy F70e 5G",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRhAcUd3v22BRyhbma7eqaXw3peJjmRn8odVz0GIZtA&s",
    "desc": "6.7-inch AMOLED display, Exynos processor, 50MP triple camera, 5000mAh battery with 25W fast charging."
  },
  {
    "name": "Ai+ Pulse 5G",
    "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/g/a/-original-imahh27g4e28qac6.jpeg?q=70",
    "desc": "Affordable 5G smartphone with a smooth 120Hz display, AI camera features, and long-lasting battery life."
  },
  {
    "name": "Motorola Edge 70 Pro+",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gHBpYdyqIgHKITK-uvNdVTe2KfDJHVCII4Dr5HNQFg&s=10",
    "desc": "Premium flagship featuring a curved OLED display, Snapdragon chipset, 200MP camera, and ultra-fast charging."
  },
  {
    "name": "POCO C85x",
    "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/7/s/-original-imahmqganju6a3gt.jpeg?q=70",
    "desc": "Budget-friendly smartphone with a large HD+ display, efficient processor, and massive 5000mAh battery."
  },
  {
    "name": "Samsung Crystal Vision 4K Smart TV",
    "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/television/a/g/0/-original-imahj8ydqperu79z.jpeg?q=70",
    "desc": "43-inch 4K UHD Smart TV with HDR support, Crystal Processor, and built-in streaming apps."
  },
  {
    "name": "LG UHD AI Smart TV",
    "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/television/r/u/i/-original-imahn8y5rfgknhnc.jpeg?q=70",
    "desc": "4K Ultra HD Smart TV powered by AI ThinQ with vivid colors and immersive surround sound."
  },
  {
    "name": "Sony BRAVIA X75L",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO36XKY6a7gCZq0CK5bQrqrMjc-VhMWm9QQVwp4TNoQ&s=10",
    "desc": "Google TV with 4K HDR, X1 Processor, Dolby Audio, and voice-enabled remote control."
  },
  {
    "name": "OnePlus Nord CE 5G",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0Hh_Rjs7z4Soe4g6CpLP2Cc2kAIDLTsuEQe58n2SDg&s=10",
    "desc": "Slim and lightweight smartphone featuring AMOLED display, 64MP camera, and Warp Charge technology."
  },
  {
    "name": "Redmi Note 14 Pro",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhqbIxSu6xTcnd06O_16kfhSnfiwjXvv_n1LePLbZJQ&s=10",
    "desc": "High-performance smartphone with 120Hz AMOLED display, 200MP AI camera, and fast charging support."
  },
  {
    "name": "realme Narzo 80 Pro",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIm3LPtbMWYI44KUl6-D284VOYYnOmK0S_LQgqdh0Wg&s=10",
    "desc": "Gaming-focused smartphone powered by a MediaTek processor with smooth performance and extended battery life."
  },
  {
    "name": "vivo V50 5G",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhSMmlrT8SWHrbDG_-1T7NXNlj1SLNekrz8lcZC_Wsw&s=10",
    "desc": "Elegant smartphone with ZEISS camera technology, vibrant AMOLED display, and reliable all-day battery."
  },
  {
    "name": "OPPO Reno 14 5G",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAN_ZqGHFHlICnFwCJjRicONciTe4mqpEBMskNq8cxiA&s=10",
    "desc": "Stylish smartphone featuring AI portrait camera, fast charging, premium design, and smooth performance."
  }
]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="row g-3">


              {data.map((value,index)=>{
                return(
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div class="card">
                  <img
                    height={300}
                    src={value.img}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{value.name}</h5>
                    <p class="card-text">
                      {value.desc}
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
