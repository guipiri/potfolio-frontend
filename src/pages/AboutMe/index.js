import React from 'react'

function AboutMe() {

  const me = {
    name: 'Guilherme Souza de Oliveira',
    birthday: '15/02/1995',
  }
  let meString = JSON.stringify(me,null,`<br/>`);
  console.log(meString);
  return (
    <div>var me = {meString}</div>
  )
}

export default AboutMe