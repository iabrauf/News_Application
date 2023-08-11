'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from "@/components/Home"
import Pagination from './Pagination'


interface ArticlesPage {
  category: string;
  heading: string;
}
const ArticlesPage: React.FC<ArticlesPage> = ({ category, heading }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [NewsPerPage] = useState(10);
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      if (category != 'top') {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
        setNews(res.data.articles);
        setLoading(false);
      } else {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
        setNews(res.data.articles);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Get current posts
  const indexOfLastNews = currentPage * NewsPerPage;
  const indexOfFirstNews = indexOfLastNews - NewsPerPage;
  const currentPosts = news.slice(indexOfFirstNews, indexOfLastNews);


  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const firstPage = () => {
    setCurrentPage(1);
  }

  const lastPage = () => {
    setCurrentPage(Math.ceil(news.length / NewsPerPage));
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(news.length / NewsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <>
      <Home news={currentPosts} loading={loading} heading={heading} />
      <Pagination
        NewsPerPage={NewsPerPage}
        totalNews={news.length}
        currentPage={currentPage}
        paginate={paginate}
        firstPage={firstPage}
        lastPage={lastPage}
        prevPage={prevPage}
        nextPage={nextPage}
        loading={loading} />
    </>
  )
}

export default ArticlesPage 
