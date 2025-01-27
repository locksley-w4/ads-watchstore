import React, { useEffect, useState } from "react";
import "./Offers.css";
import SliderList from "../../../components/ui/SliderList/SliderList";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import {offerBanners} from "../../../components/assets/offerBanners";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    setOffers(offerBanners);
  }, []);

  return (
    <div className="homepage-offers">
      <SectionHeader>Top Deals</SectionHeader>
      <SliderList>
        {offers.length &&
          offers.map((offer, index) => (
            <li className="offer-elem" key={index}>
              <Link to="/">
                <img src={offer.imageUrl} alt="Special offer banner" />
              </Link>
            </li>
          ))}
      </SliderList>
    </div>
  );
};

export default Offers;
