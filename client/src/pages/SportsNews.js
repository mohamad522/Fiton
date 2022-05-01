import React from 'react'
import '../css/sportsnews.css'
import sportsnews3 from '../images/sportsnews3.jpg'
import sportsnews4 from '../images/sportsnews4.jpg'
import sportsnews5 from '../images/sportsnews5.jpg'
import sportsnews6 from '../images/sportsnews6.jpg'
import sportsnews7 from '../images/sportsnews7.jpg'
import sportsnews8 from '../images/sportsnews8.jpg'

const SportsNews = () => {
  return (
    <>
    <div className='sportsnews-bg'>
      <h1 className='sportsnews-title'>Sports News</h1>
      <h1 className='sportsnews-date'>1 MAY 2022</h1>
      <hr></hr>
      <div className='container'>
        <a href='https://www.usnews.com/news/health-news/articles/2022-05-01/spring-sprains-sports-injury-season-begins'>
          <h1>Spring Sprains: Sports Injury Season Begins | Health News</h1></a>
        <a href='https://www.usnews.com/news/health-news/articles/2022-05-01/spring-sprains-sports-injury-season-begins'>
          <img src={sportsnews3}/></a>
      </div>
      <hr></hr>
      <div className='container'>
        <a href='https://www.usnews.com/news/sports/articles/2022-05-01/arsenal-spurs-maintain-cl-chase-survival-boost-for-everton'>
          <h1>Arsenal, Spurs Maintain CL Chase; Survival Boost for Everton</h1></a>
        <a href='https://www.usnews.com/news/sports/articles/2022-05-01/arsenal-spurs-maintain-cl-chase-survival-boost-for-everton'>
          <img src={sportsnews4}/></a>
      </div>
      <hr></hr>
      <div className='container'>
        <a href='https://www.insidethegames.biz/articles/1122608/royal-spanish-ice-sports-federation'>
          <h1>Royal Spanish Ice Sports Federation goes in search of new skeleton athletes</h1></a>
        <a href='https://www.insidethegames.biz/articles/1122608/royal-spanish-ice-sports-federation'>
          <img src={sportsnews5}/></a>
      </div>
      <hr></hr>
      <div className='container'>
        <a href='https://news.sky.com/story/former-sports-direct-auditors-braced-for-2m-fine-over-ashley-disclosures-12602297'>
          <h1>Former Sports Direct auditors braced for £2m fine over Ashley disclosures</h1></a>
        <a href='https://news.sky.com/story/former-sports-direct-auditors-braced-for-2m-fine-over-ashley-disclosures-12602297'>
          <img src={sportsnews6}/></a>
      </div>
      <hr></hr>
      <div className='container'>
        <a href='https://www.usnews.com/news/sports/articles/2022-05-01/104-and-no-more-amputee-wraps-up-marathon-record-quest'>
          <h1>104 and No More: Amputee Wraps up Marathon Record Quests</h1></a>
        <a href='https://www.usnews.com/news/sports/articles/2022-05-01/104-and-no-more-amputee-wraps-up-marathon-record-quest'>
          <img src={sportsnews7}/></a>
      </div>
      <hr></hr>
      <div className='container'>
        <a href='https://www.usnews.com/news/sports/articles/2022-05-01/heat-know-that-even-without-embiid-76ers-will-be-challenge'>
          <h1>Heat Know That Even Without Embiid, 76ers Will Be Challenge</h1></a>
        <a href='https://www.usnews.com/news/sports/articles/2022-05-01/heat-know-that-even-without-embiid-76ers-will-be-challenge'>
          <img src={sportsnews8}/></a>
      </div>
    </div>
    </>
  )
}

export default SportsNews