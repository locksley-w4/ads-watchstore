import React, { useEffect, useState } from "react";
import "./Brands.css";
import SliderList from "../../../components/ui/SliderList/SliderList";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import {BrandsData} from "../../../components/assets/BrandsData";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    setBrands(BrandsData);
  }, []);

  return (
    <div className="homepage-brands">
      <SectionHeader>Search by brand</SectionHeader>
      <SliderList>
        {brands.length &&
          brands.map((brand, index) => (
            <li className="brand-elem" key={index}>
              <Link to={`/search/brand/${brand.name}`}>
                <img src={brand.imageUrl} alt={brand.name} />
              </Link>
            </li>
          ))}
      </SliderList>
    </div>
  );
};

export default Brands;
