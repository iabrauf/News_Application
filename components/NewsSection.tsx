import NewsArticles from './NewsArticles'
import NewsArticlesSkeleton from './NewsArticlesSkeleton';


interface Article {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string
}

interface HomeProps {
  news: Article[];
  loading: boolean;
  heading: string
}
const NewsSection: React.FC<HomeProps> = ({ news, loading, heading }) => {

  const singleArticle = news.slice(0, 1);
  const restArticles = news.slice(1);

  return (
    <>
      <div className="md:container md:mx-auto mt-4 px-4">
        <h1 className="text-6xl my-5 font-bold mb-8">{heading}</h1>
        {
          !loading ? <>
            <NewsArticles singleArticle={singleArticle} restArticles={restArticles} news={news} />
          </> :
            <>
              <NewsArticlesSkeleton />
            </>


        }


      </div>
    </>

  );
}

export default NewsSection;

