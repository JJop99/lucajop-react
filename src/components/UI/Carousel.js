import React, { useState } from "react";
import classes from "./Carousel.module.sass";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import ReactModal from "react-modal";


export default function Carousel(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  
  const openModal = (image) => {
    setSelectedImage(image);
    // Rimuovi o usa selectedImage se necessario
    console.log(selectedImage);

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
    
  return (
    <>
      <Swiper
        autoHeight={true}
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay,Pagination, Navigation]}
        className={classes.swiper}
      >
        {props.images.map(
          (image) => (
            (
              <SwiperSlide key={image.key} >
                <div className={classes.swiperSlide}>
                  <img 
                    alt={image.image}
                    key={image.key} 
                    src={"/images/"+image.image} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    onClick={() => openModal("/" + image.image)}
                    className={classes.swiperImage}
                  />
                </div>
              </SwiperSlide>

              
            )
          )
        )}
      </Swiper>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={classes.modal}
        overlayClassName={classes.overlay}
        ariaHideApp={false}
      >
        <Swiper
        autoHeight={true}
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay,Pagination, Navigation]}
        className={classes.swiper}
      >
        {props.images.map(
          (image) => (
            (
              <SwiperSlide key={image.key} >
                <div className="relative w-full max-h-[90vh] overflow-y-auto" >
                  <img 
                    alt={image.image}
                    key={image.key} 
                    src={"/images/"+image.image} 
                    priority
                    onClick={() => openModal("/" + image.image)}
                    className={classes.modalImage}
                  />
                </div>
              </SwiperSlide>

              
            )
          )
        )}
        </Swiper>
      </ReactModal>
    </>
  );
}
