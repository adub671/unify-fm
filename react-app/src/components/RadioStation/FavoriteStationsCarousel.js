import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStations } from "../../store/radioStations";
import StationCard from "./StationCard";
import "./Carousel.css";
import { getFavoriteStations } from "../../store/favoriteStations";
import Slider from "react-slick";

const FavoriteStationsCarousel = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const stations = useSelector((state) => state.stations);
  const user = useSelector((state) => state.session.user);
  const [faveStations, setFaveStations] = useState();

  useEffect(() => {
    const faves = favorites?.map((fave) => {
      return stations[fave];
    });
    setFaveStations(faves);
  }, [stations, favorites, user]);

  useEffect(() => {
    (async () => {
      await dispatch(getStations());
      await dispatch(getFavoriteStations());
    })();
  }, [dispatch]);

  return (
    <>
      {user && (
        <div className="favorite-carousel-container">
          <div className="carousel-banner">Favorite Stations</div>
          <div className="carousel-container">
            {faveStations?.length > 0 ? (
              <>
                {stations && (
                  <Slider
                    slidesToShow={5}
                    arrows={true}
                    dots={false}
                    rows={1}
                    infinite={faveStations?.length > 4}
                    responsive={[
                      {
                        breakpoint: 1550,
                        settings: {
                          slidesToShow: 4,
                        },
                      },
                      {
                        breakpoint: 1340,
                        settings: {
                          slidesToShow: 3,
                        },
                      },
                      {
                        breakpoint: 800,
                        settings: {
                          slidesToShow: 2,
                        },
                      },
                      {
                        breakpoint: 600,
                        settings: {
                          slidesToShow: 1,
                        },
                      },
                    ]}
                  >
                    {faveStations?.map((station, idx) => (
                      <StationCard
                        station={station}
                        favorite={true}
                        key={idx}
                      />
                    ))}
                  </Slider>
                )}
              </>
            ) : (
              <div className="no-favorites-placeholder">
                No Favorite Stations, Click the heart to favorite a station
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FavoriteStationsCarousel;
