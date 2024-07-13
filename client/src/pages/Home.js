import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "../Maps/Map";

const getDistance = (coord1, coord2) => {
  const R = 6371;
  const dLat = ((coord2.x - coord1.x) * Math.PI) / 180;
  const dLon = ((coord2.y - coord1.y) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((coord1.x * Math.PI) / 180) *
    Math.cos((coord2.x * Math.PI) / 180) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const Home = () => {
  const [universites, setUniversites] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [avm, setAvm] = useState([]);
  const [muze, setMuze] = useState([]);
  const [opera, setOpera] = useState([]);
  const [sinema, setSinema] = useState([]);
  const [stadyum, setStadyum] = useState([]);
  const [tiyatro, setTiyatro] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");
  const [thirdSelect, setThirdSelect] = useState("");
  const [foodTypeSelect, setFoodTypeSelect] = useState("");
  const [selectedCoords, setSelectedCoords] = useState(null);
  const [nearestCoords, setNearestCoords] = useState(null);
  const [nearestItem, setNearestItem] = useState(null);
  const [displayCategory, setDisplayCategory] = useState("");

  const [foodTypes] = useState([
    "Kebap",
    "Kokoreç",
    "Tost",
    "Pizza",
    "Makarna",
    "China",
    "Döner",
    "Lahmacun",
    "Börek",
  ]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/get-universites").then((res) => {
      setUniversites(res.data);
    });
    axios.get("http://localhost:8000/api/get-hospitals").then((res) => {
      setHospitals(res.data);
    });
    axios.get("http://localhost:8000/api/get-avm").then((res) => {
      setAvm(res.data);
    });
    axios.get("http://localhost:8000/api/get-muze").then((res) => {
      setMuze(res.data);
    });
    axios.get("http://localhost:8000/api/get-opera").then((res) => {
      setOpera(res.data);
    });
    axios.get("http://localhost:8000/api/get-sinema").then((res) => {
      setSinema(res.data);
    });
    axios.get("http://localhost:8000/api/get-stadyum").then((res) => {
      setStadyum(res.data);
    });
    axios.get("http://localhost:8000/api/get-tiyatro").then((res) => {
      setTiyatro(res.data);
    });
    axios.get("http://localhost:8000/api/yelp").then((res) => {
      const transformedData = res.data.map((item) => ({
        ADI: item.name,
        X_KOORDINAT: item.coordinates.latitude,
        Y_KOORDINAT: item.coordinates.longitude,
        _id: item.id,
        RATE: item.rating,
      }));
      setRestaurant(transformedData);
    });
  }, []);

  const findNearestItem = (list, coord) => {
    let nearest = null;
    let minDist = Number.POSITIVE_INFINITY;

    list.forEach((item) => {
      const distance = Math.sqrt(
        Math.pow(item.X_KOORDINAT - coord.x, 2) +
          Math.pow(item.Y_KOORDINAT - coord.y, 2)
      );

      if (distance < minDist) {
        minDist = distance;
        nearest = item;
      }
    });

    return nearest;
  };

  const selectedCategory = (kategori) => {
    switch (kategori) {
      case "universites":
        return universites;
      case "hospitals":
        return hospitals;
      case "avm":
        return avm;
      case "muze":
        return muze;
      case "opera":
        return opera;
      case "sinema":
        return sinema;
      case "stadyum":
        return stadyum;
      case "tiyatro":
        return tiyatro;
      case "restaurant":
        return restaurant;
      default:
        return [];
    }
  };

  const handleSecondSelectChange = (e) => {
    const selected = e.target.value;
    setSecondSelect(selected);

    const selectedItem = selectedCategory(firstSelect).find(
      (item) => item.ADI === selected
    );

    if (selectedItem) {
      const { X_KOORDINAT, Y_KOORDINAT } = selectedItem;
      setSelectedCoords({
        x: X_KOORDINAT,
        y: Y_KOORDINAT,
        name: selectedItem.ADI,
      });
    }
  };

  const handleThirdSelectChange = (e) => {
    const selected = e.target.value;
    setThirdSelect(selected);
    setFoodTypeSelect("");

    if (selected !== "restaurant") {
      const selectedList = selectedCategory(selected);

      if (selectedCoords) {
        const nearestItem = findNearestItem(selectedList, selectedCoords);
        if (nearestItem) {
          setNearestCoords({
            x: nearestItem.X_KOORDINAT,
            y: nearestItem.Y_KOORDINAT,
            name: nearestItem.ADI,
            rate: nearestItem.RATE,
          });
          setNearestItem(nearestItem);
        }
      }
    } else {
      setNearestCoords(null);
      setNearestItem(null);
    }
  };

  const handleFoodTypeSelectChange = (e) => {
    const selectedFoodType = e.target.value;
    setFoodTypeSelect(selectedFoodType);

    if (selectedFoodType && selectedCoords) {
      axios.get(`http://localhost:8000/api/yelp?term=${selectedFoodType}&location=Ankara`).then((res) => {
        const transformedData = res.data.map((item) => ({
          ADI: item.name,
          X_KOORDINAT: item.coordinates.latitude,
          Y_KOORDINAT: item.coordinates.longitude,
          _id: item.id,
          RATE: item.rating,
        }));
        const nearestRestaurant = findNearestItem(transformedData, selectedCoords);
        if (nearestRestaurant) {
          setNearestCoords({
            x: nearestRestaurant.X_KOORDINAT,
            y: nearestRestaurant.Y_KOORDINAT,
            name: nearestRestaurant.ADI,
            rate: nearestRestaurant.RATE,
          });
          setNearestItem(nearestRestaurant);
        }
      });
    }
  };

  const handleDisplayCategoryChange = (e) => {
    const selected = e.target.value;
    setDisplayCategory(selected);
    setFirstSelect("");
    setSecondSelect("");
    setThirdSelect("");
    setFoodTypeSelect("");
    setSelectedCoords(null);
    setNearestCoords(null);
    setNearestItem(null);
  };

  const mesafe =
    nearestCoords && selectedCoords
      ? getDistance(nearestCoords, selectedCoords).toFixed(2)
      : null;

  const coordinatesToMap = nearestCoords && selectedCoords
    ? [selectedCoords, nearestCoords]
    : selectedCoords
      ? [selectedCoords]
      : [];

  const allItemsToMap = displayCategory
    ? selectedCategory(displayCategory).map(item => ({
        x: item.X_KOORDINAT,
        y: item.Y_KOORDINAT,
        name: item.ADI,
        rate: item.RATE, 
      }))
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-orange-600 p-4 text-white fixed w-full z-10 top-0">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="/" className="text-2xl font-bold">
              Ankara Rehberi
            </a>
          </div>
          <div>
            <a href="#kategori-secimi" className="mr-4 hover:underline">
              Kategori Seçimi
            </a>
            <a href="#harita" className="hover:underline">
              Harita
            </a>
          </div>
        </div>
      </nav>
      <div className="flex mt-24 justify-between">
        <div className="w-1/3 ml-8 mr-8">
          <select
            className="block w-full p-2 border rounded-lg"
            value={firstSelect}
            onChange={(e) => {
              setFirstSelect(e.target.value);
              setSecondSelect("");
              setThirdSelect("");
              setFoodTypeSelect("");
              setSelectedCoords(null);
              setNearestCoords(null);
              setDisplayCategory("");
            }}
          >
            <option value="">Kategori Seç</option>
            <option value="universites">Üniversiteler</option>
            <option value="hospitals">Hastaneler</option>
            <option value="avm">Alışveriş Merkezleri</option>
            <option value="muze">Müzeler</option>
            <option value="opera">Operalar</option>
            <option value="sinema">Sinemalar</option>
            <option value="stadyum">Stadyumlar</option>
            <option value="tiyatro">Tiyatrolar</option>
            <option value="restaurant">Restoranlar</option>
          </select>

          <select
            className="block w-full p-2 mt-4 border rounded-lg"
            value={secondSelect}
            onChange={handleSecondSelectChange}
            disabled={!firstSelect}
          >
            <option value="">Seçenek Seç</option>
            {selectedCategory(firstSelect).map((option) => (
              <option key={option.ADI} value={option.ADI}>
                {option.ADI}
              </option>
            ))}
          </select>

          <select
            className="block w-full p-2 mt-4 border rounded-lg"
            value={thirdSelect}
            onChange={handleThirdSelectChange}
            disabled={!secondSelect}
          >
            <option value="">Kategori Seç</option>
            <option value="avm">Alışveriş Merkezleri</option>
            <option value="hospitals">Hastaneler</option>
            <option value="universites">Üniversiteler</option>
            <option value="muze">Müzeler</option>
            <option value="opera">Operalar</option>
            <option value="sinema">Sinemalar</option>
            <option value="stadyum">Stadyumlar</option>
            <option value="tiyatro">Tiyatrolar</option>
            <option value="restaurant">Restoranlar</option>
          </select>

          {thirdSelect === "restaurant" && (
            <select
              className="block w-full p-2 mt-4 border rounded-lg"
              value={foodTypeSelect}
              onChange={handleFoodTypeSelectChange}
            >
              <option value="">Yemek Çeşidi Seç</option>
              {foodTypes.map((foodType) => (
                <option key={foodType} value={foodType}>
                  {foodType}
                </option>
              ))}
            </select>
          )}

          <select
            className="block w-full p-2 mt-4 border rounded-lg"
            value={displayCategory}
            onChange={handleDisplayCategoryChange}
          >
            <option value="">Tüm Kategoriyi Görüntüle</option>
            <option value="universites">Üniversiteler</option>
            <option value="hospitals">Hastaneler</option>
            <option value="avm">Alışveriş Merkezleri</option>
            <option value="muze">Müzeler</option>
            <option value="opera">Operalar</option>
            <option value="sinema">Sinemalar</option>
            <option value="stadyum">Stadyumlar</option>
            <option value="tiyatro">Tiyatrolar</option>
            <option value="restaurant">Restoranlar</option>
          </select>

          <div>
            {secondSelect && nearestItem ? (
              <p>
                {secondSelect} ile {nearestItem.ADI} arasındaki mesafe {mesafe} KM
                {nearestItem.rate && <span> (Puan: {nearestItem.rate})</span>}
              </p>
            ) : null}
          </div>
        </div>

        <div className="w-2/3">
          <Map coords={[...coordinatesToMap, ...allItemsToMap]} distance={mesafe} />
        </div>
      </div>
      <footer className="bg-orange-600 p-4 text-white fixed w-full bottom-0 text-center">
        <p>
          &copy; {new Date().getFullYear()} Ankara Rehberi. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
};

export default Home;
