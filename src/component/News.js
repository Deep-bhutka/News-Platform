import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updatenews = async () =>{
        props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=62c0fd7c7edc49f1b9f834475364736d&page=${page}&pageSize=${props.pagesize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedata = await data.json()
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    useEffect(()=>{
        updatenews();
    },[])
    const fetchMoreData = async() => {
       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=62c0fd7c7edc49f1b9f834475364736d&page=${page+1}&pageSize=${props.pagesize}`
       setPage(page+1)
        let data = await fetch(url)
        let parsedata = await data.json()
        setArticles(articles.concat(parsedata.articles))
        setTotalResults(parsedata.totalResults)
    }
        return (
            <>
                <h1 className='my-4 text-center' style={{paddingTop:"36px"}}>News-Headlines from {capitalizeFirstLetter(props.category)}</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}>
                        <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} dis={element.description ? element.description : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
            </  >
        )
    }

News.defaultProps = {
    country: 'in',
    pagesize: 5,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
}
export default News

