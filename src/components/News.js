import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (articles.length === 0 && totalResults !== 0) {
      updateNews()
    }
    if (totalResults === 0) {
      updateNews()
    }

    document.title = ` ${props.category.charAt(0).toUpperCase()}${props.category.slice(1)} - News Dog`;
    
  }, [articles, totalResults])

  const fetchMoreData = () => {

    setLoading(true);

    setPage(page + 1);
    setArticles(articles.concat(totalArticles.slice(articles.length, (page + 1) * props.pageSize)));
    setLoading(false);
  };


  const updateNews = () => {
    props.setProgress(10)

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    props.setProgress(20)
    fetch(`https://newsapi.in/newsapi/news.php?key=${props.apiKeyIn}&category=${props.category}`, requestOptions)

    .then(response => response.json())
      .then(result => {
const newsIn = result;

        setTotalResults(newsIn["News"].length)

        props.setProgress(60)
        setTotalArticles(newsIn["News"])
        props.setProgress(80)
        setArticles(newsIn["News"].slice(articles.length, props.pageSize));
        props.setProgress(90)
        setLoading(false)
        props.setProgress(100)
      }).then(() => {
      })
      .catch(error => console.log('error', error))

  }

  return (
    <>
      <div>

        <h2 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>News Dog - Top {props.head} Headines</h2>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >

          <div className='container'>
            <div className="row">
              {articles.map((element) => {
                
                return <div className="col-md-4 my-3" key={element.id}>
                  <NewsItem title={!element.title ? "" : element.title.slice(0, 45)} description={!element.description ? "" : element.description.slice(0, 90)} imageUrl={!element.image ? "" : element.image} newsUrl={!element.url ? "" : element.url} publishedAt={element.published_date} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

      </div>
    </>
  )
}

News.propTypes = {
  country: 'india',
  pageSize: 8,
  category: 'general'
}

News.defaultProps = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


