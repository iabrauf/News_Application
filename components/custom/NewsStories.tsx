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
  news: Newsarticle[]
}
const NewsStories: React.FC<NewsArticlesProps> = ({ news }) => {
  function formatDateString(dateString: string) {
    return moment(dateString).format('MMMM Do YYYY');
  }
  return (
    <>
      <div className="animated grid-item grid grid-cols-2 gap-4 mb-12">
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
    </>
  )
}

export default NewsStories
