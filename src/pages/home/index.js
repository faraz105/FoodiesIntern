import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [limit, setLimit] = useState(10);

  const DEFAULT_COLUMNS = [
    { id: "name", label: "Dessert (100g serving)", align: "left" },
    { id: "calories", label: "Calories", align: "right" },
    { id: "fat", label: "Fat (g)", align: "right" },
    { id: "carbs", label: "Carbs (g)", align: "right" },
    { id: "protein", label: "Protein (g)", align: "right" },
  ];
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  return (
    <div>
      <h1>Dashboard</h1>

     
    </div>
  );
};

export default Home;
