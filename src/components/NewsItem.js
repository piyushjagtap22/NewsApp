import React from 'react'

export default function NewsItem(props) {

    function capitalizeFirstLetter(sentence) {
        const words = sentence.split(' ');
        
        const capitalizedWords = words.map(word => {
          const firstLetter = word.charAt(0).toUpperCase();
          const restOfWord = word.slice(1);
          return firstLetter + restOfWord;
        });
        
        return capitalizedWords.join(' ');
      }

        let { title, description, imageUrl, newsUrl,  publishedAt } = props;

        const author = newsUrl.split("/")[2].split(".").slice(0,2).join(" ")
        const source = newsUrl.split("/")[2].split(".").slice(0,2).join(" ")
        
        return (
            <div className="my-3">

                <div className="card">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                        {capitalizeFirstLetter(source)}

                    </span>

                    <img src={!imageUrl ? "https://dogtime.com/wp-content/uploads/sites/12/2014/12/file_20952_top-news-stories-of-2014.jpg" : imageUrl} alt="News Dog"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...
                        </h5>

                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">
                        
                            {publishedAt ? `Published On : ${new Date(publishedAt).toDateString()}` : ""}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        
                    </div>
                </div></div>
        )
    
}
