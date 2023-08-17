import NewsArticles from './NewsArticles'


interface Article {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string
}

interface HomeProps {
  news: Article[];
}
const NewsSection: React.FC<HomeProps> = ({ news }) => {
  console.log(news);


  const singleArticle = news.slice(0, 1);
  const restArticles = news.slice(1);

  return (
    <>
      <NewsArticles singleArticle={singleArticle} restArticles={restArticles} news={news} />
    </>

  );
}

export default NewsSection;

