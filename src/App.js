import MasonryGrid from "./Components/MasonryGrid";
import React, { useState } from "react";
import axios from "axios";
import InputField from "./Components/InputField";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [imagesWithColors, setImagesWithColors] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?count=20&query=${searchTerm}&client_id=N5AHeNGvt052FC2asSIh_Yoyuzm62rigjJrqOFcHuhw`
      );
      const images = response.data;
      console.log(response.data);

      setImagesWithColors(images);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <InputField
        searchTerm={searchTerm}
        onInput={handleChange}
        onSearch={handleSearch}
      />
      <MasonryGrid imagesWithColors={imagesWithColors} />
    </div>
  );
};

export default App;
