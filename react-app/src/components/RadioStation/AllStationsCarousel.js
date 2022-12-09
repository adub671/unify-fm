import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStations } from "../../store/radioStations";
import StationCard from "./StationCard";
import "./Carousel.css";
import Slider from "react-slick";

const AllStationsCarousel = () => {
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.stations);

  useEffect(() => {
    (async () => {
      await dispatch(getStations());
    })();
  }, [dispatch]);

  return (
    <>
      <div className="carousel-banner">All Stations</div>
      <div className="carousel-container">
        {stations && (
          <Slider
            slidesToShow={5}
            dots={true}
            centerMode={true}
            responsive={[
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 4,

                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                },
              },
              // {
              //   breakpoint: 750,
              //   settings: {
              //     slidesToShow: 1,
              //   },
              // },
            ]}
          >
            {Object.values(stations)?.map((station, idx) => (
              <StationCard station={station} key={idx} />
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default AllStationsCarousel;
