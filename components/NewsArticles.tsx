import Link from 'next/link';
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
  return (
    <div className='animated'>
      {
        singleArticle.length != 0 &&
        <div className="hidden tablet:block">
          <div className='flex justify-between items-center'>
            <img
              className="basis-1/2 singleArticle"
              src={singleArticle[0].urlToImage ? singleArticle[0].urlToImage : 'https://placehold.co/600x400/000000/FFFFFF/png'}
              alt={singleArticle[0].title}
            ></img>
            <Link className='basis-1/2' href={`${singleArticle[0].url}`} target='_blank'>
              <div className='flex flex-col basis-1/2 md:ml-5 justify-between'>
                <span>{formatDateString(singleArticle[0].publishedAt)}</span>
                <h1 className="text-4xl font-bold my-3">{singleArticle[0].title}</h1>
                <p>{singleArticle[0].description}</p>
              </div>
            </Link>
          </div>
        </div>
      }
      <div className='hidden tablet:block'>
        <div className="grid grid-cols-3 gap-4 mt-12">
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
      <div className="hide">
        <div className='grid md:grid-cols-2 gap-4 '>
          {news.map((article, index) => (
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
    </div>
  );
};

export default NewsArticles;
