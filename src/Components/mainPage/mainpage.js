import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ContentCard from "../card/card";
import Filters from "../filters/filters";
import "./mainpage.css";
import { CompleteUrl } from "../api/api";

const MainPage = () => {
  const [newsData, setNewsdata] = useState([]);
  const [data, setData] = useState({
    q: "",
    from: "",
    to: "",
    sortBy: "",
    page: 1,
    pageSize: 20,
  });

  const handleChange = (e) => {
    setData((pre) => {
      const duplicate = { ...pre };
      duplicate[e.target.name] = e.target.value;

      return duplicate;
    });
  };
  const fetchNews = async () => {
    try {
      const response = await fetch(CompleteUrl(data));
      const res = await response.json();
      setNewsdata([...res.articles]);
    } catch (err) {
      console.log("Error ", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <div className="container">
        <Filters data={data} onSearch={fetchNews} handleChange={handleChange} />

        <Grid container spacing={2}>
          {newsData.map((item) => (
            <Grid
              item
              md={6}
              xs={12}
              key={item.publishedAt}
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
