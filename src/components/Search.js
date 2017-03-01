import React from 'react'

export const SearchNews = (props) =>{
  return (
    <div>
      <input type='text' onChange={props.handleChange} />
    </div>
  )
}

SearchNews.propTypes = {
  handleChange: React.PropTypes.func.isRequired
}



/*
Catatan :
pada return diatas: jika menggunakan form seperti dibawah ini
  // <form onSubmit={props.handleForm}>
        <input type='text' value={props.currentSearch} onChange={props.handleChange} />
  // </form>
currentSearch digunakan jika kita menggunakan search menggunakan button, jika tidak maka tidak diperlukan

- Karena menggunakan onChange, maka kita hanya perlu menggunakan <div>
- props itu adalah property yang dikirmkan dari App.js pada SearchNews berupa kumpulan property ( dalam kasus ini cuma 1 property)
- cara memanggil property yang dikirimkan oleh SearchNews dari App.js "props.handleChange"

*/
