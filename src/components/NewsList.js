import React from 'react'

export const NewsList = (props) => {
  return (
    <div className="details">
        <ul>
            {props.news.filter((data) => {
              return data.title === null ? '' : data.title
            }).map((item) => {
              return (
                <div>
                    <li key={item.objectID}>
                        <a href={item.url} target="_blank">{item.title}</a>
                    </li>
                </div>
              )
            })}
        </ul>
    </div>
  )
}

//Note : digunakan untuk memfilter data yang kosong
// filter((data) => {
//     return data.title === null ? '' : data.title
// })
