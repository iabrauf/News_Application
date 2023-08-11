import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NewsStories from './custom/NewsStories'
import moment from 'moment'

interface Newsarticle {
  [x: string]: any;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string
}

interface NewsArticlesProps {
  singleArticle: Newsarticle[]
  restArticles: Newsarticle[]
  news: Newsarticle[]
}

const NewsArticles: React.FC<NewsArticlesProps> = ({ singleArticle, restArticles, news }) => {
  function formatDateString(dateString: string) {
    return moment(dateString).format('MMMM Do YYYY');
  }

  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (screenWidth && screenWidth < 1023 && screenWidth >= 550) {
    return <NewsStories news={news} />;
  } else {
    return (
      <div className='container-main animated'>
        {
          singleArticle.length != 0 &&
          <div className="grid-item md:flex justify-center items-center">
            <div className='basis-1/2 mb-2'>
              <img
                className='object-cover rounded-md'
                src={singleArticle[0].urlToImage ? singleArticle[0].urlToImage : 'https://placehold.co/600x400/000000/FFFFFF/png'}
                alt={singleArticle[0].title}
              />
            </div>
            <Link className='basis-1/2' href={`${singleArticle[0].url}`} target='_blank'>
              <div className="flex flex-col mx-5 md:px-5">
                <span>{formatDateString(singleArticle[0].publishedAt)}</span>
                <h1 className="text-4xl font-bold my-3">{singleArticle[0].title}</h1>
                <p>{singleArticle[0].description}</p>
              </div>
            </Link>
          </div>
        }

        <div className="grid-item md:grid md:grid-cols-3 gap-4 md:mt-12">
          {restArticles.map((article, index) => (
            <div className="mb-16 md:flex md:flex-col justify-between items-center " key={index}>
              <div className='max-w-full mb-2  h-1/2 overflow-hidden'>
                <img
                  className='rounded-md object-cover min-h-full'
                  src={article.urlToImage ? article.urlToImage : 'https://placehold.co/600x400/000000/FFFFFF/png'}
                  alt={article.title}
                />
              </div>
              <div className='h-1/2 w-full pb-4'>
                <Link href={`${article.url}`} target='_blank'>
                  <div className="flex flex-col">
                    <span>{formatDateString(article.publishedAt)}</span>
                    <h1 className="text-2xl font-bold my-3">{article.title}</h1>
                    <p className='text-sm'>{article.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default NewsArticles;
