import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ContentCard from "../card/card";
import { mockData } from "../Data/data";
// import { mockData } from "../Data/data";
// import { FetchingApi } from "../api/api";
import Filters from "../filters/filters";
import "./mainpage.css";
const MainPage = () => {
  const url =
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=df8b53a34bd84132b40390bc839d6414";
const baseUrl =  "https://newsapi.org/v2/everything";
const apiKey = "df8b53a34bd84132b40390bc839d6414";
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNews(data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <div className="container">
        <Filters />
        {/* <FetchingApi/> */}

        <Grid container spacing={2}>
          {mockData.map((item) => (
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ContentCard {...item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default MainPage;
