import { useEffect, useState } from "react";

const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=df8b53a34bd84132b40390bc839d6414";
const FetchingApi = ()=>{
    const [news, setNews] = useState([]);
    const fetchNews  = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setNews(data);
        console.log(data);
    };
 useEffect(()=>{
    fetchNews();
 },[])
}