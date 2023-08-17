'use client'
import React, { useState, useEffect } from 'react';
import NewsSection from "@/components/NewsSection"
import Pagination from './Pagination'
import NewsArticlesSkeleton from './NewsArticlesSkeleton';
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from '../redux/features/news/newsSlice'


// interface ArticlesPage {
//   category: string;
//   heading: string;
// }
// : React.FC<ArticlesPage>
const MainSection = ({ category, heading }) => {
  const news = useSelector((state) => state.news)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const [NewsPerPage] = useState(10);
  useEffect(() => {
    dispatch(fetchNews(category))
  }, []);

  console.log(news);

  if (news.loading) {
    return <div className="md:container md:mx-auto mt-4 px-4">
      <h1 className="text-6xl my-5 font-bold mb-8">{heading}</h1>
      <NewsArticlesSkeleton />
    </div>
  }

  // Get current posts
  const indexOfLastNews = currentPage * NewsPerPage;
  const indexOfFirstNews = indexOfLastNews - NewsPerPage;
  const currentPosts = news.news.articles.slice(indexOfFirstNews, indexOfLastNews);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const firstPage = () => {
    setCurrentPage(1);
  }

  const lastPage = () => {
    setCurrentPage(Math.ceil(news.news.articles.length / NewsPerPage));
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(news.news.articles.length / NewsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <>
      <div className="md:container md:mx-auto mt-4 px-4">
        <h1 className="text-6xl my-5 font-bold mb-8">{heading}</h1>
        <NewsSection news={currentPosts} heading={heading} />
      </div>
      <Pagination
        NewsPerPage={NewsPerPage}
        totalNews={news.news.articles.length}
        currentPage={currentPage}
        paginate={paginate}
        firstPage={firstPage}
        lastPage={lastPage}
        prevPage={prevPage}
        nextPage={nextPage}
        loading={news.loading} />
    </>
  )
}

export default MainSection 
