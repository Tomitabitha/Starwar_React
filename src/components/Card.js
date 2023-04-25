import React from 'react'

const Card = ({list}) => {
    const reduceLength = (text, maxlength) => {
        if (text.length > maxlength){
            return text.slice(0,maxlength).trim() + '...' 
        } else {
            return text;
    
        }
        }
  return (
    
          <div className='data-list' >
                <h3 className='title'>{list.title}</h3>
                <p className='date'>{new Date(list.release_date).toLocaleDateString('en-us',{month:'long', day: 'numeric', year: 'numeric'})}</p>
                <p className='crawl'>{reduceLength(list.opening_crawl, 260)}</p>
                <a className='more-info' href='#'>More info</a>
                </div> 
    
  )

}




export default Card