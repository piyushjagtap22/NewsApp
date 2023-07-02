import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  



  useEffect(() => {
    updateNews();
document.title = ` ${props.category.charAt(0).toUpperCase()}${props.category.slice(1)} - News Dog`;

  }, [])


  const fetchMoreData = () => {
    
    setLoading(true);


    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}&language=en`, requestOptions)
      .then(response => response.json())
      .then(result => {
        
        console.log('API response:', result); // Log the response to see if data is received
        setArticles(
          articles.concat(result.articles)
        )
        setTotalResults(result.totalResults)
        setLoading(true);

      })
      .catch(error => {
        console.log('API error:', error); // Log any errors that occur during the API request
        setLoading(false);
      });
      setPage(page + 1);
  };


  const updateNews = () => {
    props.setProgress(10)

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    props.setProgress(20)
    fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&language=en`, requestOptions)
      .then(response => response.json())
      .then(result => {
        props.setProgress(60)
        setArticles(result.articles);
        setLoading(false)
        setTotalResults(result.totalResults)


        props.setProgress(100)
      })
      .catch(error => console.log('error', error))


  }


  // Check if articles is undefined or empty
  if (!articles || articles.length === 0) {
    return <Spinner />;
  }
  return (
    <>
      <div>
        <h2 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>News Dog - Top {props.category.charAt(0).toUpperCase()+props.category.slice(1)} Headines</h2>


        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >

          <div className='container'>
            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem title={!element.title ? "" : element.title.slice(0, 45)} description={!element.description ? "" : element.description.slice(0, 90)} imageUrl={!element.url ? "" : element.urlToImage} newsUrl={!element.url ? "" : element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
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
  country: 'us',
  pageSize: 8,
  category: 'general'
}

News.defaultProps = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}



