import React from 'react'
import NewsItem from './NewsItem'

export const NewsList = (props) => {
  return (
    <div className="details">
        <ul>
            {props.news.filter((data) => {
              return data.title === null ? '' : data.title
            }).map((item) => {
              return (
                <NewsItem item={item}/>
              )
            })}
        </ul>
    </div>
  )
}

// Note : digunakan untuk memfilter data yang kosong
// filter((data) => {
//     return data.title === null ? '' : data.title
// })

//     <NewsItem item={item}/> bisa diganti dengan dulu {...item}, jadi ketika dikirim cukup dibaca dengan props.objectID,
// jika tidak menggunakan ... maka dipanggil dnegan props.item.objectID
