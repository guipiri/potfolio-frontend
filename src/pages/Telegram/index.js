import { upload } from '@testing-library/user-event/dist/upload';
import React, { useState } from 'react'

function Telegram() {
  const [file, setFile] = useState("");
    function handleSubmit(e) {
        e.preventDefault()
        console.log(file);
        upload(e.target,file)
    }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="htmlInput"></label>
        <input name='htmlInput' id="htmlInput" type="file" accept='text/html' onChange={(e)=>{setFile(e.target.files[0])}} />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Telegram