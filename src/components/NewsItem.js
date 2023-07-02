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

    // const data = {
    //     "id": "1640",
    //     "title": "Mumbai Local Train: कई लाइनों पर आज प्रभावित रहेगी मुंबई लोकल ट्रेन सेवा, यहां जानें पूरी डिटेल",
    //     "image": "https://hindi.oneindia.com/img/2023/07/mumbailocaltrain-1688288569.jpg",
    //     "description": "Mumbai Local Train News: कई लाइनों पर आज मुंबई लोकल ट्रेन सेवा प्रभावित रहेंगी। मुंबई रेलवे ने खुद इस बात की जानकारी दी है। रेलवे ने बताया कि रखरखाव कार्य की वजह से आज, रविवार 02 जुलाई को सेंट्रल लाइन और ",
    //     "published_date": "2023-07-02",
    //     "url": "https://hindi.oneindia.com/news/mumbai/mumbai-local-train-service-will-be-affected-on-many-lines-today-know-full-details-here-786432.html"
    //   }
        let { title, description, imageUrl, newsUrl,  publishedAt } = props;

        // const title = data.title
        // const description = data.description
        // const imageUrl = data.imageUrl
        // const newsUrl = data.url
        const author = newsUrl.split("/")[2].split(".").slice(0,2).join(" ")
        // const publishedAt = data.published_date
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
                        
                            {/* By {author ? author : "Unknown"}  */}
                            {publishedAt ? `Published On : ${new Date(publishedAt).toDateString()}` : ""}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        
                    </div>
                </div></div>
        )
    
}
