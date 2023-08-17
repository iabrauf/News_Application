// 'use client'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NewsSection from "@/components/NewsSection";
// import Pagination from './Pagination';
// import moment from 'moment';

// const SearchArticle = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [NewsPerPage] = useState(10);
//   const [searchValue, setSearchValue] = useState('');
//   const [sortValue, setSortValue] = useState('publishedAt')
//   const [value, setValue] = useState(moment().subtract(1, "days").format("YYYY-MM-DD"));

//   const currentDate = moment().subtract(1, "days").format("YYYY-MM-DD");
//   const oneWeekDate = moment().subtract(7, "days").format("YYYY-MM-DD");
//   const twoWeeksDate = moment().subtract(14, "days").format("YYYY-MM-DD");
//   const threeDayDate = moment().subtract(21, "days").format("YYYY-MM-DD");
//   const oneMonthDate = moment().subtract(28, "days").format("YYYY-MM-DD");


//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get(`https://newsapi.org/v2/everything?q=nature&from=${currentDate}&to=${value}&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
//         setNews(res.data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//       setLoading(false);
//     };

//     fetchNews();
//   }, []);


//   // Get current posts
//   const indexOfLastNews = currentPage * NewsPerPage;
//   const indexOfFirstNews = indexOfLastNews - NewsPerPage;
//   const currentPosts = news.slice(indexOfFirstNews, indexOfLastNews);

//   const paginate = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   const firstPage = () => {
//     setCurrentPage(1);
//   };

//   const lastPage = () => {
//     setCurrentPage(Math.ceil(news.length / NewsPerPage));
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const nextPage = () => {
//     if (currentPage < Math.ceil(news.length / NewsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     if (searchValue === '') {
//       setLoading(true);
//       try {
//         const res = await axios.get(`https://newsapi.org/v2/everything?q=nature&from=${currentDate}&to=${value}&sortBy=${sortValue}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
//         if (res.data.totalResults === 0) {
//           alert("Search an appropriate keyword");
//           setSearchValue('');
//         } else {
//           setNews(res.data.articles);
//           setCurrentPage(1);
//         }
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     else {
//       setLoading(true);
//       try {
//         const res = await axios.get(`https://newsapi.org/v2/everything?q=${searchValue}&from=${currentDate}&to=${value}&sortBy=${sortValue}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
//         if (res.data.totalResults === 0) {
//           alert("Search an appropriate keyword");
//           setSearchValue('');
//         } else {
//           setNews(res.data.articles);
//           setCurrentPage(1);
//         }
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit} className='tablet:flex tablet:justify-between tablet:items-center md:container md:mx-auto mt-4 px-4'>
//         <div className='basis-2/4 tablet:mr-5'>
//           <input
//             type='text'
//             className=' search-input outline-none bg-gray-200'
//             placeholder='Search a Keyword...'
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//           />
//         </div>
//         <div className='buttons basis-2/4 flex items-center'>
//           <select onChange={(e) => setSortValue(e.target.value)} className=" options text-base bg-gray-200 rounded-md p-3 outline-none mr-4 ">
//             <option selected value="publishedAt">Most Recent</option>
//             <option value="popularity">Popular </option>
//             <option value="relevancy">Relevance </option>
//           </select>
//           <div className='rounded-md border-2 mr-1'>
//             <select onChange={(e) => setValue(e.target.value)} className=" options text-base bg-gray-200 rounded-md p-3 outline-none ">
//               <option selected value={currentDate}>Today</option>
//               <option value={oneWeekDate}>Last 7 Days </option>
//               <option value={twoWeeksDate}>Last 14 Days </option>
//               <option value={threeDayDate}>Last 21 Days </option>
//               <option value={oneMonthDate}>Last Month </option>
//             </select>

//           </div>
//           <button className='options search-button bg-rose-500' type='submit'>
//             Search News
//           </button>
//         </div>
//       </form>
//       <NewsSection news={currentPosts} loading={loading} heading={'News Application'} />
//       <Pagination
//         NewsPerPage={NewsPerPage}
//         totalNews={news.length}
//         currentPage={currentPage}
//         paginate={paginate}
//         firstPage={firstPage}
//         lastPage={lastPage}
//         prevPage={prevPage}
//         nextPage={nextPage}
//         loading={loading}
//       />
//     </>
//   );
// };

// export default SearchArticle;