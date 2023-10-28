import React, { useState, useEffect, useContext } from "react";
import LOADSDATA from "../../loadsData";
import Filter from "../components/Filter";
import LoadsList from "../components/LoadsList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth.context";
import "./Loads.css";

const Loads = (props) => {
  const auth = useContext(AuthContext);
  const [selectedPickupLocation, setSelectedPickupLocation] = useState(null);
  const [selectedDropOffLocation, setSelectedDropOffLocation] = useState(null);
  const [selectedMinPrice, setSelectedMinPrice] = useState(null);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadsData, setLoadsData] = useState([]);
  useEffect(() => {
    const fetchLoads = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/loads",
          'GET',
          null,
          {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          }
        );
        setLoadsData(responseData.loads);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLoads();
  }, [sendRequest]);

  const resetFilters = (event) => {
    event.preventDefault();
    setSelectedPickupLocation(null);
    setSelectedDropOffLocation(null);
    setSelectedMinPrice(null);
  };

  const applyFilters = () => {
    return loadsData.filter((load) => {
      const pickupLocationMatches =
        !selectedPickupLocation || load.pickupPlace === selectedPickupLocation;
      const dropOffLocationMatches =
        !selectedDropOffLocation ||
        load.dropOffPlace === selectedDropOffLocation;
      const priceMatches = !selectedMinPrice || load.price >= selectedMinPrice;

      return pickupLocationMatches && dropOffLocationMatches && priceMatches;
    });
  };

  const handlePickupLocationChange = (location) => {
    setSelectedPickupLocation(location);
  };

  const handleDropOffLocationChange = (location) => {
    setSelectedDropOffLocation(location);
  };

  const handleMinPriceChange = (minPrice) => {
    setSelectedMinPrice(minPrice);
  };

  console.log(applyFilters())

  return (
    <main className="loads-main">
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <Filter
        onPickupLocationChange={handlePickupLocationChange}
        onDropOffLocationChange={handleDropOffLocationChange}
        onMinPriceChange={handleMinPriceChange}
        onResetFilters={resetFilters}
      />
      {!isLoading && loadsData && <LoadsList items={applyFilters()} />}
    </main>
  );
};

export default Loads;
