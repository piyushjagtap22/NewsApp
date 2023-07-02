import React from 'react'

export default function NewsItem(props) {

        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
        return (
            <div className="my-3">

                <div className="card">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                        {source}

                    </span>

                    <img src={!imageUrl ? "https://dogtime.com/wp-content/uploads/sites/12/2014/12/file_20952_top-news-stories-of-2014.jpg" : imageUrl} alt="News Dog"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} {publishedAt ? `On ${new Date(publishedAt).toGMTString()}` : ""}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div></div>
        )
    
}
