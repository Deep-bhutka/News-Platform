import React from 'react'

const NewsItem =(props)=>{
        let { title, dis, imageurl, newsUrl, author, date,source} = props
        return (
            <div>
                <div className="card">
                    <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                        </span>
                    </div>
                    <img src={!imageurl ? "https://namiohio.org/wp-content/uploads/2021/06/news-update-1-1080x500.png" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{dis}...</p>
                        <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItem
